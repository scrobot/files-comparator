package com.tambikhalifa.filecomparator.domain.files

import com.tambikhalifa.filecomparator.data.files.FileComparisonRepository
import com.tambikhalifa.filecomparator.data.files.SubTaskResultRepository
import com.tambikhalifa.filecomparator.domain.files.entities.FileComparisonTask
import com.tambikhalifa.filecomparator.domain.files.entities.ResponseFileComparisonTask
import com.tambikhalifa.filecomparator.domain.files.entities.SubTask
import com.tambikhalifa.filecomparator.domain.files.entities.SubTaskResult
import com.tambikhalifa.filecomparator.domain.text.services.ShortTextCompareService
import com.tambikhalifa.filecomparator.extensions.chunkStrings
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile
import reactor.core.publisher.Flux
import java.util.*

@Service
class FileCompareServiceImpl(
    private val repository: FileComparisonRepository,
    private val subRepository: SubTaskResultRepository,
    private val service: ShortTextCompareService
): FileCompareService {
    
    private val encoder = Base64.getEncoder()
    
    override fun compareFiles(source: MultipartFile, target: MultipartFile): Flux<ResponseFileComparisonTask> = FileComparisonTask(
            id = UUID.randomUUID().toString(),
            sourceFile = encoder.encodeToString(source.bytes),
            targetFile = encoder.encodeToString(target.bytes)
        )
        .let {
            it.copy(
                subTasks = createSubTasks(it.sourceFile, it.targetFile)
            )
        }
        .let { repository.save(it) }
        .flux()
        .flatMapIterable { task -> task.subTasks.map { Pair(task, it) } }
        .doOnNext { (task, subtask) ->
            subRepository.save(
                SubTaskResult(
                    id = subtask.id,
                    taskId = task.id,
                    sourceLength = subtask.sourceFilePart.length,
                    targetLength = subtask.targetFilePart.length,
                    symbolsMatch = service.compare(subtask.sourceFilePart, subtask.targetFilePart).symbolsMatch
                )
            )
        }
        .map { (task, _) ->
            subRepository.findAllByTaskId(task.id)
                .let {
                    ResponseFileComparisonTask(
                        task.id,
                        task.createdAt,
                        source.size,
                        target.size,
                        task.subTasks.count().toLong(),
                        it.count().toLong(),
                        it.map { it.symbolsMatch.toFloat() / it.sourceLength * 100 }.average().toFloat()
                    )
                }
        }
        
    
    private fun createSubTasks(source: String, target: String): List<SubTask> = chunkStrings(source, target, SOURCE_STRING_CHUNK_SIZE)
        .map { (s, t) ->
            SubTask(
                id = UUID.randomUUID().toString(),
                sourceFilePart = s,
                targetFilePart = t
            )
        }
    
    private companion object {
        const val SOURCE_STRING_CHUNK_SIZE = 500
    }
}