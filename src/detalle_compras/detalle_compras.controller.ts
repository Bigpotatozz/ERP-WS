import { Controller } from '@nestjs/common';
import { DetalleComprasService } from './detalle_compras.service';

@Controller('detalle-compras')
export class DetalleComprasController {
  constructor(private readonly detalleComprasService: DetalleComprasService) {}
}
