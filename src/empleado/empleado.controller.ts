import { Controller } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}
}
