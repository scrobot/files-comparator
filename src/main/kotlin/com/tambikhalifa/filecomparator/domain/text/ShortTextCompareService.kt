package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.TextComparisonResult

class ShortTextCompareService : TextCompareService {
    
    override fun compare(target: String, subject: String): TextComparisonResult {
        val compareMap = mutableMapOf<Int, Boolean>()
        
        target
            .replace(" ", "")
            .toList()
            .forEachIndexed { index, c ->
                if (subject.length <= index) return@forEachIndexed
                compareMap[index] = c == subject[index]
            }
        
        return TextComparisonResult(
            targetIncomingLength = target.length,
            subjectIncomingLength = subject.length,
            symbolsMatch = compareMap.map { it.value }.count { it }
        )
    }
    
}