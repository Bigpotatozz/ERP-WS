import { Controller } from '@nestjs/common';
import { VentaService } from './venta.service';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}
}
