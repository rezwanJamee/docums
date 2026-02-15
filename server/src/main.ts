import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,PUT,PATCH,POST',
    credentials: true,
  });

  // Open API Swagger doc @ http://localhost:8080/api/v1/docs
  const config = new DocumentBuilder()
    .setTitle('DocuMS')
    .setDescription(
      'A document management service. This API allows you to manage your documents, including creating, updating, deleting, and sharing documents with others.',
    )
    .setVersion('version 1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);
  

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
