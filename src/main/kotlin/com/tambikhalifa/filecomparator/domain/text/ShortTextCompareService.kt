package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.ComparisonResult

class ShortTextCompareService : TextCompareService {

    override fun compare(target: String, subject: String): ComparisonResult {
        val compareMap = mutableMapOf<Int, Boolean>()

        target
            .toList()
            .forEachIndexed { index, c ->
                if(subject.length <= index) return@forEachIndexed
                compareMap[index] = c == subject[index]
            }

        return ComparisonResult(
                targetIncomingLength = target.length,
                subjectIncomingLength = subject.length,
                symbolsMatch = compareMap.map { it.value }.count { it }
        )
    }

}