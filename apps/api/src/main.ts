import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import { FlubErrorHandler } from 'nestjs-flub'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      snapshot: true,
    },
  )
  app.useGlobalFilters(new FlubErrorHandler())
  await app.listen(3000, '0.0.0.0')
}
bootstrap()
