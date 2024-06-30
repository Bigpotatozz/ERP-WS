import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmpleadoEntity } from './empleado/entitie/empleado.entity';
import { PersonaEntity } from './persona/entities/persona.entity';

@Module({
  imports: [PersonaModule, EmpleadoModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1924',
      database: 'erp_sweet_code',
      models: [EmpleadoEntity, PersonaEntity]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
