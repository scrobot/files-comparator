package com.tambikhalifa.filecomparator.domain.text.services

import com.tambikhalifa.filecomparator.data.text.TextComparisonRepository
import com.tambikhalifa.filecomparator.domain.text.exceptions.NoTaskFoundById
import com.tambikhalifa.filecomparator.domain.text.TextCompareService
import com.tambikhalifa.filecomparator.domain.text.TextComparisonProcessor
import com.tambikhalifa.filecomparator.domain.text.entities.SubTask
import com.tambikhalifa.filecomparator.domain.text.entities.ResponseCompareText
import com.tambikhalifa.filecomparator.domain.text.entities.ResponseTextComparisonTask
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonTask
import com.tambikhalifa.filecomparator.extensions.chunkStrings
import org.springframework.stereotype.Service
import java.util.*

@Service
class LongTextCompareService(
    private val repository: TextComparisonRepository,
    private val processor: TextComparisonProcessor
) : TextCompareService {
    
    override fun compare(target: String, subject: String): ResponseCompareText = repository.save(
            TextComparisonTask(
                id = UUID.randomUUID().toString(),
                sourceText = target,
                targetText = subject,
                subTasks = splitTargetToTasks(target, subject).toMutableList()
            )
        )
        .let {
            ResponseCompareText(
                targetIncomingLength = target.length,
                subjectIncomingLength = subject.length,
                taskId = it.id
            )
        }
        .apply {
            processor.startHandleTextComparisonTask(taskId)
        }
    
    fun findTask(id: String) = repository.findById(id)
        .map {
            ResponseTextComparisonTask(
                id = it.id,
                createdAt = it.createdAt,
                timeElapsed = it.result?.timeElapsed,
                matchPersents = it.result?.percentsMatch,
                tasksCount = it.subTasks.count(),
                handledTasksCount = it.subTasks.count { it.taskProcess != null }
            )
        }
        .orElseThrow { NoTaskFoundById(id) }
    
    private fun splitTargetToTasks(target: String, subject: String): List<SubTask> = chunkStrings(target, subject, SOURCE_STRING_CHUNK_SIZE)
        .map { (s, t) ->
            SubTask(
                sourceText = s,
                targetText = t
            )
        }
    
    private companion object {
        const val SOURCE_STRING_CHUNK_SIZE = 500
        const val EMPTY_STRING = ""
    }
    
}