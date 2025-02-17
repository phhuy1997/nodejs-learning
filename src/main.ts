import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create an App with using module is AppModule
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`); // App will listen on a port of server
  });
}

bootstrap();
