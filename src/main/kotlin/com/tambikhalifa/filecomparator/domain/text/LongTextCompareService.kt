package com.tambikhalifa.filecomparator.domain.text

import com.tambikhalifa.filecomparator.domain.text.entities.ComparisonResult
import org.springframework.stereotype.Service
import java.util.*

@Service
class LongTextCompareService : TextCompareService {

    override fun compare(target: String, subject: String): ComparisonResult {
        return ComparisonResult(
                targetIncomingLength = target.length,
                subjectIncomingLength = subject.length,
                taskId = Random().nextLong()
        )
    }

}