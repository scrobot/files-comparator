package com.tambikhalifa.filecomparator.extensions

import java.util.*

fun chunkStrings(source: String, target: String, chunkSize: Int): List<Pair<String, String>> = source.chunked(chunkSize)
    .mapIndexed { index, s ->
        val substringBegin = index * chunkSize
        val substringEnd = substringBegin + chunkSize
        
        Pair(
            s,
            try {
                target.substring(substringBegin, if(substringEnd < target.length) substringEnd else target.length)
            } catch (e: StringIndexOutOfBoundsException) { "" }
        )
    }