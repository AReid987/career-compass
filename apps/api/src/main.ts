import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as swaggerStats from 'swagger-stats'
import { AppModule } from './app.module'
import { FlubErrorHandler } from 'nestjs-flub'
import { Logger } from '@nestjs/common'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      snapshot: true
    }
  )
  const logger = new Logger()
  app.useLogger(logger)

  const config = new DocumentBuilder()
    .setTitle('Career Compass')
    .setDescription('Navigating your Job Search with AI')
    .setVersion('1.0')
    .addTag('CareerCompass')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  app.use(swaggerStats.getMiddleware({ swaggerSpec: document }))
  SwaggerModule.setup('api', app, document)

  app.useGlobalFilters(new FlubErrorHandler())
  await app.listen(3000, '0.0.0.0')
  logger.log('🚀 Server running on http://localhost:3000', 'Bootstrap')
  logger.log(
    '🧪 Swagger running on http://localhost:3000/api',
    'Bootstrap Swagger'
  )
  logger.log(
    '📊 Swagger Stats running on http://localhost:3000/swagger-stats/',
    'Bootstrap Swagger Stats'
  )
  logger.log(
    '📃 Prisma Studio => run pnpm dlx prisma studio. View on http://localhost:5000'
  )
}

bootstrap().catch((error) => {
  const logger = new Logger()
  logger.log('Error starting API: ', error)
  process.exit(1)
})
