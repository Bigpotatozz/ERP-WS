import { Test, TestingModule } from '@nestjs/testing';
import { DetalleComprasController } from './detalle_compras.controller';
import { DetalleComprasService } from './detalle_compras.service';

describe('DetalleComprasController', () => {
  let controller: DetalleComprasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleComprasController],
      providers: [DetalleComprasService],
    }).compile();

    controller = module.get<DetalleComprasController>(DetalleComprasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
