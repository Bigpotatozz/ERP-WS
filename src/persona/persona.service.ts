import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Model } from 'sequelize';
import { PersonaEntity } from './entities/persona.entity';

@Injectable()
export class PersonaService {}
