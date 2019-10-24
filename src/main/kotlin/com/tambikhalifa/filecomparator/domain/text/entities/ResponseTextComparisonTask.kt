package com.tambikhalifa.filecomparator.domain.text.entities

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonProperty

@JsonInclude(value = JsonInclude.Include.NON_NULL)
data class ResponseTextComparisonTask(
    val id: String,
    @JsonProperty("created_at")
    val createdAt: Long,
    @JsonProperty("time_elapsed")
    val timeElapsed: Long?,
    @JsonProperty("match")
    val matchPersents: Float?,
    @JsonProperty("tasks_count")
    val tasksCount: Int,
    @JsonProperty("handled_tasks_count")
    val handledTasksCount: Int
)