import { Controller } from '@nestjs/common';
import { DetalleInventarioService } from './detalle_inventario.service';

@Controller('detalle-inventario')
export class DetalleInventarioController {
  constructor(private readonly detalleInventarioService: DetalleInventarioService) {}
}
