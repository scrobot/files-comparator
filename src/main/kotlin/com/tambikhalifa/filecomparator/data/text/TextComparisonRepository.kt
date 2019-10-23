package com.tambikhalifa.filecomparator.data.text

import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonTask
import org.springframework.data.mongodb.repository.MongoRepository

interface TextComparisonRepository : MongoRepository<TextComparisonTask, String>