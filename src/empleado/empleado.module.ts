import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { EmpleadoEntity } from './entities/empleado.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([EmpleadoEntity, PersonaEntity])
  ],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule {}
