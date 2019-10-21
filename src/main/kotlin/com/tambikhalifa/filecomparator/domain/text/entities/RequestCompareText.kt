package com.tambikhalifa.filecomparator.domain.text.entities

import com.fasterxml.jackson.annotation.JsonProperty

data class RequestCompareText(
        @JsonProperty("first_text")
        val firstText: String?,
        @JsonProperty("second_text")
        val secondText: String?
)