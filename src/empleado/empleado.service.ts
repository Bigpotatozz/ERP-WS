import { Body, HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmpleadoEntity } from './entities/empleado.entity';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { CreateEmpleado } from './dto/create-empleado.dto';
import { CreatePersona } from 'src/persona/dto/create-persona.dto';
import { Model } from 'sequelize';

@Injectable()
export class EmpleadoService {

    constructor(@InjectModel(EmpleadoEntity) private empleadoModel: typeof EmpleadoEntity, 
                @InjectModel(PersonaEntity) private personaModel: typeof PersonaEntity){}

    async postEmpleado(persona, empleado): Promise<object>{

        try{            
            
            const person = await this.personaModel.create(persona);
            const employee = await this.empleadoModel.create({contrasenia: empleado.contrasenia, 
                                                            curp: empleado.curp, 
                                                            fecha_contratacion: empleado.fecha_contratacion, 
                                                            puesto: empleado.puesto, 
                                                            salario: empleado.salario, 
                                                            id_persona: person.id_persona});

            return {persona: person, empleado: employee};

            
           

        }catch(error){
            console.log(error);
            throw new HttpException(error, 500);
        }
        
    }

    async getEmpleado(id: number): Promise<object>{

        try{

            const employee = await this.empleadoModel.findOne({where: {id_empleado: id, estatus : true}, include: PersonaEntity});
            console.log(employee);

            if(!employee){
                throw new HttpException('Empleado no encontrado', 404);
            }

            return employee;
            

        }catch(error){
            throw error
        }

    }

}
