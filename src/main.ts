import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create an App with using module is AppModule
  app.useGlobalPipes(new ValidationPipe()); // Validation on all Controller
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`); // App will listen on a port of server
  });
}

bootstrap();
