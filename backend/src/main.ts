import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://carambar-h8vb.onrender.com',
  });
  await app.listen(process.env.PORT ?? 3000);
  // Mise à jour pour forcer le déploiement Render

}
bootstrap();
