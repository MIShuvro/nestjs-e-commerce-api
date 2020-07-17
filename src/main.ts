import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as cowsay from 'cowsay'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const PORT = config.get('PORT') || 3000


  const options = new DocumentBuilder()
    .setTitle('E-Commerce')
    .setDescription('The e-commerce API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-documentation', app, document);

  app.listen(PORT, () => {
    console.log(cowsay.say({
      text: `Server is running on ${PORT}`,
      e: "oO",
      T: "U "
    }));
  });
}
bootstrap();
