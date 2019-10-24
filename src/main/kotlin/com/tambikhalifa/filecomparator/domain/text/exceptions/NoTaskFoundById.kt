package com.tambikhalifa.filecomparator.domain.text.exceptions

class NoTaskFoundById(id: String, override val message: String? = "not found task to id: $id"): Exception(message)