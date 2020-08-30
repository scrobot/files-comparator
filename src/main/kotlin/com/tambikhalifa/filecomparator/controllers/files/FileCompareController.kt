package com.tambikhalifa.filecomparator.controllers.files

import com.tambikhalifa.filecomparator.domain.files.FileCompareService
import com.tambikhalifa.filecomparator.domain.files.entities.ResponseFileComparisonTask
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import java.awt.PageAttributes

@RestController
@RequestMapping("api/v1/file")
class FileCompareController(
    private val service: FileCompareService
) {
    
    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("compare")
    fun compareFiles(
        @RequestParam("source") source: MultipartFile,
        @RequestParam("target") target: MultipartFile
    ): Mono<ResponseFileComparisonTask> = service.compareFiles(source, target).log()
    
    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("compare/{task-id}", produces = [MediaType.TEXT_EVENT_STREAM_VALUE], headers=["Accept=*/*"])
    fun getTasksStream(@PathVariable("task-id") taskId: String): Flux<ResponseFileComparisonTask> = service.getTasksStream(taskId).log()
    

}