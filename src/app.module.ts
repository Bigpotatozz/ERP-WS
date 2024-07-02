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

@Module({
  imports: [PersonaModule, EmpleadoModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1924',
      database: 'erp_sweet_code',
      models: [EmpleadoEntity, PersonaEntity, SucursalEntity, ClienteEntity, DireccionEntity]
    }),
    SucursalModule,
    ClienteModule,
    DireccionModule,
    VentaModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
