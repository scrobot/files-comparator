package com.tambikhalifa.filecomparator.domain.files.entities

import com.fasterxml.jackson.annotation.JsonProperty

data class ResponseFileComparisonTask(
    @JsonProperty("task_id")
    val taskId: String,
    @JsonProperty("created_at")
    val createdAt: Long,
    @JsonProperty("source_size")
    val sourceFileSize: Long,
    @JsonProperty("target_size")
    val targetFileSize: Long,
    @JsonProperty("tasks_count")
    val tasksCount: Long,
    @JsonProperty("tasks_handled")
    val tasksHandled: Long,
    @JsonProperty("percents_match")
    val percentsMatch: Float
)