package com.tambikhalifa.filecomparator.domain.files

import com.tambikhalifa.filecomparator.domain.files.entities.FileComparisonTask
import com.tambikhalifa.filecomparator.domain.files.entities.ResponseFileComparisonTask
import org.springframework.web.multipart.MultipartFile
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

interface FileCompareService {

    fun compareFiles(source: MultipartFile, target: MultipartFile): Mono<ResponseFileComparisonTask>
    
    fun getTasksStream(taskId: String): Flux<ResponseFileComparisonTask>

}