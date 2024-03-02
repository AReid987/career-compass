import { Test } from '@nestjs/testing'
import request from 'supertest'
import { AppController } from '../src/app.controller'
import { INestApplication } from '@nestjs/common'
import { AppService } from '../src/app.service'
import { AppModule } from '../src/app.module'

describe('AppController', () => {
  let appController: AppController
  let app: INestApplication
  let httpServer: any
  let appService: AppService

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController],
      imports: [AppModule],
      providers: [AppService]
    }).compile()

    app = module.createNestApplication()
    appService = module.get<AppService>(AppService)
    appController = module.get<AppController>(AppController)
    await app.init()
    httpServer = app.getHttpServer()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('root', () => {
    it('should return ("Hello World!") from requests on api endpoint "/"', async () => {
      return request(httpServer).get('/').expect(200).expect('Hello World!')
    })

    it('should return "Hello World!" from AppService.getHello', () => {
      expect(appService.getHello()).toBe('Hello World!')
    })

    it('should return "Hello World!" from AppController root', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
