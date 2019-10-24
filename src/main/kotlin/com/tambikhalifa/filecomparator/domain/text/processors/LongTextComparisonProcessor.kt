package com.tambikhalifa.filecomparator.domain.text.processors

import com.tambikhalifa.filecomparator.data.text.TextComparisonRepository
import com.tambikhalifa.filecomparator.domain.text.TextComparisonProcessor
import com.tambikhalifa.filecomparator.domain.text.entities.TaskProcess
import com.tambikhalifa.filecomparator.domain.text.entities.TaskResult
import com.tambikhalifa.filecomparator.domain.text.services.ShortTextCompareService
import org.springframework.stereotype.Component
import java.util.concurrent.Executors

@Component
class LongTextComparisonProcessor(
    private val repository: TextComparisonRepository,
    private val service: ShortTextCompareService
): TextComparisonProcessor {
    
    override fun startHandleTextComparisonTask(id: String?) {
        val executor = Executors.newFixedThreadPool(16)
        
        id?.let(repository::findById)
            ?.ifPresent { task ->
                task.subTasks.mapIndexed { index, subTask ->
                    Runnable {
                        val result = service.compare(subTask.sourceText, subTask.targetText)
                        task.subTasks[index].taskProcess = TaskProcess(
                            symbolsMatch = result.symbolsMatch
                        )
                        task.result = TaskResult(
                            timeElapsed = System.currentTimeMillis() - task.createdAt,
                            percentsMatch = task.subTasks.map { it.taskProcess?.symbolsMatch ?: 0 }.average().toFloat()
                        )
                        repository.save(task)
                    }
                }
                .forEach {
                    executor.execute(it)
                }
            }
    }
    
    
}