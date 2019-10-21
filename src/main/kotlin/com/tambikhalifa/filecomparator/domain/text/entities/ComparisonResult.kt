package com.tambikhalifa.filecomparator.domain.text.entities

import com.fasterxml.jackson.annotation.JsonInclude
import com.fasterxml.jackson.annotation.JsonProperty

@JsonInclude(value = JsonInclude.Include.NON_NULL)
data class ComparisonResult(
        @JsonProperty("target_incoming_length")
        val targetIncomingLength: Int = 0,
        @JsonProperty("subject_incoming_length")
        val subjectIncomingLength: Int = 0,
        @JsonProperty("symbols_match")
        val symbolsMatch: Int = 0,
        @JsonProperty("task_id")
        val taskId: Long? = null
) {
    @JsonProperty("percents_match")
    val percentsMatch: Float = symbolsMatch.toFloat() / targetIncomingLength * 100
}