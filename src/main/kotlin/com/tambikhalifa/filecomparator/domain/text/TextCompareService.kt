package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.ComparisonResult

interface TextCompareService {

    fun compare(target: String, subject: String): ComparisonResult

}