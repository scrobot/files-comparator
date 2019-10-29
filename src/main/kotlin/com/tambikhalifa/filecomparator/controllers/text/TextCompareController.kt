package com.tambikhalifa.filecomparator.controllers.text

import com.tambikhalifa.filecomparator.domain.text.exceptions.EmptyTargetException
import com.tambikhalifa.filecomparator.domain.text.services.LongTextCompareService
import com.tambikhalifa.filecomparator.domain.text.services.ShortTextCompareService
import com.tambikhalifa.filecomparator.domain.text.entities.ResponseCompareText
import com.tambikhalifa.filecomparator.domain.text.entities.RequestCompareText
import com.tambikhalifa.filecomparator.domain.text.entities.ResponseTextComparisonTask
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/v1/text")
class TextCompareController(
    private val longTextCompareService: LongTextCompareService
) {
    
    private val logger = LoggerFactory.getLogger(TextCompareController::class.java)
    
    @CrossOrigin(origins = ["http://localhost:3001"])
    @PostMapping("compare")
    fun compareText(@RequestBody body: RequestCompareText): ResponseEntity<ResponseCompareText> = (body.firstText ?: "")
        .let { target ->
            when {
                target.isBlank() -> throw EmptyTargetException
                target.length > 500 -> longTextCompareService
                else -> ShortTextCompareService()
            }
        }
        .let { service ->
            ResponseEntity(
                service.compare(body.firstText ?: "", body.secondText ?: ""),
                HttpStatus.OK
            )
        }
    
    @CrossOrigin(origins = ["http://localhost:3001"])
    @GetMapping("task-status/{id}")
    fun checkTaskStatus(@PathVariable("id") id: String): ResponseEntity<ResponseTextComparisonTask> = ResponseEntity(
        longTextCompareService.findTask(id),
        HttpStatus.OK
    )
}