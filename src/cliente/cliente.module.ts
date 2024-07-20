import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClienteEntity } from './entities/cliente.entity';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { DireccionEntity } from 'src/direccion/entities/direccion.entity';

@Module({
  imports: [SequelizeModule.forFeature([ClienteEntity, PersonaEntity, DireccionEntity])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
