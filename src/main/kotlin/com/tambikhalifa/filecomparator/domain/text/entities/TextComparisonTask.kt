package com.tambikhalifa.filecomparator.domain.text.entities

import org.springframework.data.annotation.Id

data class TextComparisonTask(
        @Id val id: String,
        val sourceText: String,
        val targetText: String,
        val subTasks: List<SubTask>,
        val result: TaskResult? = null
)

data class SubTask(
        val sourceText: String,
        val targetText: String,
        val taskProcess: TaskProcess? = null
)

data class TaskProcess(
        val clock: Long = System.currentTimeMillis(),
        val symbolsMatch: Int
)

data class TaskResult(
        val percentsMatch: Float,
        val timeElapsed: Long
)