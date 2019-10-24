package com.tambikhalifa.filecomparator.controllers.files

import com.tambikhalifa.filecomparator.domain.files.FileCompareService
import com.tambikhalifa.filecomparator.domain.files.entities.ResponseFileComparisonTask
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile
import reactor.core.publisher.Flux
import java.awt.PageAttributes

@RestController
@RequestMapping("api/v1/file")
class FileCompareController(
    private val service: FileCompareService
) {

    @PostMapping("compare", produces = [MediaType.APPLICATION_STREAM_JSON_VALUE])
    fun compareFiles(
        @RequestParam("source") source: MultipartFile,
        @RequestParam("target") target: MultipartFile
    ): Flux<ResponseFileComparisonTask> = service.compareFiles(source, target).log()
        

}