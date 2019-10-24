package com.tambikhalifa.filecomparator.domain.files

import com.tambikhalifa.filecomparator.domain.files.entities.FileComparisonTask
import com.tambikhalifa.filecomparator.domain.files.entities.ResponseFileComparisonTask
import org.springframework.web.multipart.MultipartFile
import reactor.core.publisher.Flux

interface FileCompareService {

    fun compareFiles(source: MultipartFile, target: MultipartFile): Flux<ResponseFileComparisonTask>

}