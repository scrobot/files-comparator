package com.tambikhalifa.filecomparator.domain.text.entities

import org.springframework.data.annotation.Id

data class TextComparisonTask(
        @Id val id: String,
        val sourceText: String,
        val targetText: String,
        val subTasks: MutableList<SubTask>,
        var result: TaskResult? = null,
        val createdAt: Long = System.currentTimeMillis()
)

data class SubTask(
        val sourceText: String,
        val targetText: String,
        var taskProcess: TaskProcess? = null
)

data class TaskProcess(
        val clock: Long = System.currentTimeMillis(),
        val symbolsMatch: Int
)

data class TaskResult(
        val percentsMatch: Float,
        val timeElapsed: Long
)