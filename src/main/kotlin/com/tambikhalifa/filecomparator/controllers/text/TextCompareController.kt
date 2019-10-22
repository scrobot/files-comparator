package com.tambikhalifa.filecomparator.controllers.text

import com.tambikhalifa.filecomparator.domain.exceptions.EmptyTargetException
import com.tambikhalifa.filecomparator.domain.text.LongTextCompareService
import com.tambikhalifa.filecomparator.domain.text.ShortTextCompareService
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonResult
import com.tambikhalifa.filecomparator.domain.text.entities.RequestCompareText
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController("/v1/text")
class TextCompareController(
    private val longTextCompareService: LongTextCompareService
) {
    
    @PostMapping("compare")
    fun compareText(@RequestBody body: RequestCompareText): ResponseEntity<TextComparisonResult> = (body.firstText ?: "")
        .let { target ->
            when {
                target.isBlank() -> throw EmptyTargetException
                target.length > 5000 -> longTextCompareService
                else -> ShortTextCompareService()
            }
        }
        .let { service ->
            ResponseEntity(
                service.compare(body.firstText ?: "", body.secondText ?: ""),
                HttpStatus.OK
            )
        }
    
}