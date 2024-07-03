import { Controller } from '@nestjs/common';
import { CompraService } from './compra.service';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}
}
