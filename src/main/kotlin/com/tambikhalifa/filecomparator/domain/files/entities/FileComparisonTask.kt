package com.tambikhalifa.filecomparator.domain.files.entities

import org.springframework.data.annotation.Id

data class FileComparisonTask(
    @Id val id: String,
    val sourceFile: String,
    val targetFile: String,
    val subTasks: List<SubTask> = listOf(),
    val createdAt: Long = System.currentTimeMillis()
)

data class SubTask(
    val id: String,
    val sourceFilePart: String,
    val targetFilePart: String
)

data class SubTaskResult(
    @Id val id: String,
    val taskId: String,
    val clock: Long = System.currentTimeMillis(),
    val sourceLength: Int,
    val targetLength: Int,
    val symbolsMatch: Int
)