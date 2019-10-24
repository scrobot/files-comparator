package com.tambikhalifa.filecomparator.data.files

import com.tambikhalifa.filecomparator.domain.files.entities.SubTaskResult
import org.springframework.data.mongodb.repository.MongoRepository

interface SubTaskResultRepository: MongoRepository<SubTaskResult, String> {
    
    fun findAllByTaskId(taskId: String): List<SubTaskResult>
    
}