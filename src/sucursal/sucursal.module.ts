import { Module } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { SucursalController } from './sucursal.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { SucursalEntity } from './entities/sucursal.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([SucursalEntity])
  ],
  controllers: [SucursalController],
  providers: [SucursalService],
})
export class SucursalModule {}
