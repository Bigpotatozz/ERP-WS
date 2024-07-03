import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmpleadoEntity } from './empleado/entities/empleado.entity';
import { PersonaEntity } from './persona/entities/persona.entity';
import { SucursalModule } from './sucursal/sucursal.module';
import { ClienteModule } from './cliente/cliente.module';
import { DireccionModule } from './direccion/direccion.module';
import { SucursalEntity } from './sucursal/entities/sucursal.entity';
import { ClienteEntity } from './cliente/entities/cliente.entity';
import { DireccionEntity } from './direccion/entities/direccion.entity';
import { VentaModule } from './venta/venta.module';
import { ProductoModule } from './producto/producto.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';
import { DetalleInventarioModule } from './detalle_inventario/detalle_inventario.module';
import { InventarioModule } from './inventario/inventario.module';
import { CompraModule } from './compra/compra.module';
import { DetalleComprasModule } from './detalle_compras/detalle_compras.module';
import { CompraEntity } from './compra/entities/compra.entity';
import { DetalleCompraEntity } from './detalle_compras/entities/detalle_compra.entity';
import { DetalleInventarioEntity } from './detalle_inventario/entities/detalle_inventario.entity';
import { DetalleVentaEntity} from './detalle_venta/entities/detalle_venta.entity';
import { InventarioEntity } from './inventario/entities/inventario.entity';
import { ProductoEntity } from './producto/entities/producto.entity';
import { VentaEntity } from './venta/entities/venta.entity';

@Module({
  imports: [PersonaModule, EmpleadoModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1924',
      database: 'erp_sweet_code',
      models: [ClienteEntity, 
                CompraEntity, 
                DetalleCompraEntity,
                DetalleInventarioEntity, 
                DetalleVentaEntity, 
                DireccionEntity, 
                EmpleadoEntity, 
                InventarioEntity, 
                PersonaEntity, 
                ProductoEntity, 
                SucursalEntity, 
                VentaEntity]
    }),
    SucursalModule,
    ClienteModule,
    DireccionModule,
    VentaModule,
    ProductoModule,
    DetalleVentaModule,
    DetalleInventarioModule,
    InventarioModule,
    CompraModule,
    DetalleComprasModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
