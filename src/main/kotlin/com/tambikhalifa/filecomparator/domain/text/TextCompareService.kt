package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonResult

interface TextCompareService {
    
    fun compare(target: String, subject: String): TextComparisonResult
    
}