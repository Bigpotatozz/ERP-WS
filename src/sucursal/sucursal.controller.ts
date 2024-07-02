import { Controller } from '@nestjs/common';
import { SucursalService } from './sucursal.service';

@Controller('sucursal')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}
}
