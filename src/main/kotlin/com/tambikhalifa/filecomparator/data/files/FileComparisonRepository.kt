package com.tambikhalifa.filecomparator.data.files

import com.tambikhalifa.filecomparator.domain.files.entities.FileComparisonTask
import org.springframework.data.mongodb.repository.ReactiveMongoRepository

interface FileComparisonRepository: ReactiveMongoRepository<FileComparisonTask, String> {
}