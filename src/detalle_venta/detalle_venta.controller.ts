import { Controller } from '@nestjs/common';
import { DetalleVentaService } from './detalle_venta.service';

@Controller('detalle-venta')
export class DetalleVentaController {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}
}
