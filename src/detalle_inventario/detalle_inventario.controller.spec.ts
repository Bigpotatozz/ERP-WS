import { Test, TestingModule } from '@nestjs/testing';
import { DetalleInventarioController } from './detalle_inventario.controller';
import { DetalleInventarioService } from './detalle_inventario.service';

describe('DetalleInventarioController', () => {
  let controller: DetalleInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleInventarioController],
      providers: [DetalleInventarioService],
    }).compile();

    controller = module.get<DetalleInventarioController>(DetalleInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
