import { Module } from '@nestjs/common';
import { DetalleInventarioService } from './detalle_inventario.service';
import { DetalleInventarioController } from './detalle_inventario.controller';

@Module({
  controllers: [DetalleInventarioController],
  providers: [DetalleInventarioService],
})
export class DetalleInventarioModule {}
