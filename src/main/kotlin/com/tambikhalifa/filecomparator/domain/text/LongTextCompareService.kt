package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.data.text.TextComparisonRepository
import com.tambikhalifa.filecomparator.domain.text.entities.SubTask
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonResult
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonTask
import org.springframework.stereotype.Service
import java.util.*

@Service
class LongTextCompareService(
    private val repository: TextComparisonRepository
) : TextCompareService {
    
    override fun compare(target: String, subject: String): TextComparisonResult = repository.save(
        TextComparisonTask(
            id = UUID.randomUUID().toString(),
            sourceText = target,
            targetText = subject,
            subTasks = splitTargetToTasks(target, subject)
        )
    ).let {
        TextComparisonResult(
            targetIncomingLength = target.length,
            subjectIncomingLength = subject.length,
            taskId = it.id
        )
    }
    
    private fun splitTargetToTasks(target: String, subject: String): List<SubTask> = target.chunked(SOURCE_STRING_CHUNK_SIZE)
        .mapIndexed { index, source ->
            val substringBegin = index * SOURCE_STRING_CHUNK_SIZE
            val substringEnd = substringBegin + SOURCE_STRING_CHUNK_SIZE
            SubTask(
                sourceText = source,
                targetText = try {
                    subject.substring(substringBegin, substringEnd)
                } catch (e: StringIndexOutOfBoundsException) {
                    EMPTY_STRING
                }
            )
        }
    
    private companion object {
        const val SOURCE_STRING_CHUNK_SIZE = 500
        const val EMPTY_STRING = ""
    }
    
}