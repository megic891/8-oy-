import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  // --- BASIC TEST ---
  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  // --- GET HELLO() TEST ---
  describe('getHello()', () => {
    it('should return "Hello World!"', () => {
      const result = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockImplementation(() => result);
      expect(appController.getHello()).toBe(result);
    });
  });

  // --- PARAMETER TEST ---
  describe('getById()', () => {
    it('should return data by id', () => {
      const id = 5;
      const result = { id, name: 'Test User', age: 16 };

      jest.spyOn(appService, 'getById').mockImplementation((id: number) => result);

      expect(appController.getById(id)).toEqual(result);
    });

    it('should return null if id not found', () => {
      jest.spyOn(appService, 'getById').mockImplementation(() => null);

      expect(appController.getById(999)).toBeNull();
    });
  });

  // --- POST BODY TEST ---
  describe('create()', () => {
    it('should create a new item', () => {
      const dto = { name: 'New Item', age: 20 };
      const response = { id: 1, ...dto };

      jest.spyOn(appService, 'create').mockImplementation(() => response);

      expect(appController.create(dto)).toEqual(response);
    });
  });

  // --- UPDATE TEST ---
  describe('update()', () => {
    it('should update item', () => {
      const id = 1;
      const dto = { name: 'Updated', age: 22 };
      const response = { id, ...dto };

      jest.spyOn(appService, 'update').mockImplementation(() => response);

      expect(appController.update(id, dto)).toEqual(response);
    });
  });

  // --- DELETE TEST ---
  describe('delete()', () => {
    it('should return success true', () => {
      const id = 1;
      const response = { success: true };

      jest.spyOn(appService, 'remove').mockImplementation(() => response);

      expect(appController.remove(id)).toEqual(response);
    });
  });

});