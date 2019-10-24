package com.tambikhalifa.filecomparator.domain.text.services

import com.tambikhalifa.filecomparator.domain.text.TextCompareService
import com.tambikhalifa.filecomparator.domain.text.entities.ResponseCompareText
import org.springframework.stereotype.Service

@Service
class ShortTextCompareService : TextCompareService {
    
    override fun compare(target: String, subject: String): ResponseCompareText {
        val compareMap = mutableMapOf<Int, Boolean>()
        
        target
            .toList()
            .forEachIndexed { index, c ->
                if (subject.length <= index) return@forEachIndexed
                compareMap[index] = c == subject[index]
            }
        
        return ResponseCompareText(
            targetIncomingLength = target.length,
            subjectIncomingLength = subject.length,
            symbolsMatch = compareMap.map { it.value }.count { it }
        )
    }
    
}