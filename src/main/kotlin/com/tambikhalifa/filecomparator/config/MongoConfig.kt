package com.tambikhalifa.filecomparator.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.core.MongoTemplate
import com.mongodb.MongoClientURI
import org.springframework.data.mongodb.core.SimpleMongoDbFactory
import org.springframework.data.mongodb.MongoDbFactory
import org.springframework.core.env.Environment


@Configuration
class MongoConfig(private val env: Environment) {
    
    @Bean
    fun mongoDbFactory(): MongoDbFactory = SimpleMongoDbFactory(MongoClientURI(env.getProperty("spring.data.mongodb.uri")!!))
    
    @Bean
    fun mongoTemplate(): MongoTemplate = MongoTemplate(mongoDbFactory())
    
}