package com.tambikhalifa.filecomparator.controllers.text

import com.tambikhalifa.filecomparator.domain.exceptions.EmptyTargetException
import com.tambikhalifa.filecomparator.domain.text.services.LongTextCompareService
import com.tambikhalifa.filecomparator.domain.text.services.ShortTextCompareService
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonResult
import com.tambikhalifa.filecomparator.domain.text.entities.RequestCompareText
import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonTask
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/v1/text")
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
    
    @GetMapping("task-status/{id}")
    fun checkTaskStatus(@PathVariable("id") id: String): ResponseEntity<TextComparisonTask> = longTextCompareService.findTask(id)
        .let {
            when {
                it.isPresent -> ResponseEntity(
                    it.get(),
                    HttpStatus.OK
                )
                else -> ResponseEntity(HttpStatus.BAD_REQUEST)
            }
        }
}