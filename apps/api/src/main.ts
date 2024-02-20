import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { FlubErrorHandler } from 'nestjs-flub'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  })
  app.useGlobalFilters(new FlubErrorHandler())
  await app.listen(3000)
}
bootstrap()
