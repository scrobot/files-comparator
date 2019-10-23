package com.tambikhalifa.filecomparator

import com.tambikhalifa.filecomparator.data.text.TextComparisonRepository
import com.tambikhalifa.filecomparator.domain.text.processors.LongTextComparisonProcessor
import com.tambikhalifa.filecomparator.domain.text.services.ShortTextCompareService
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class FilecomparatorApplication

fun main(args: Array<String>) {
    runApplication<FilecomparatorApplication>(*args)
}
