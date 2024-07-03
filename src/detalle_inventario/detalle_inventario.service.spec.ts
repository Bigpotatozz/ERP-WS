import { Test, TestingModule } from '@nestjs/testing';
import { DetalleInventarioService } from './detalle_inventario.service';

describe('DetalleInventarioService', () => {
  let service: DetalleInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleInventarioService],
    }).compile();

    service = module.get<DetalleInventarioService>(DetalleInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
