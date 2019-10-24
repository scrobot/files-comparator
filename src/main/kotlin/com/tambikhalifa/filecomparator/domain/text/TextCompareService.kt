package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.ResponseCompareText

interface TextCompareService {
    
    fun compare(target: String, subject: String): ResponseCompareText
    
}