import { Body, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmpleadoEntity } from './entities/empleado.entity';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { CreateEmpleado } from './dto/create-empleado.dto';
import { CreatePersona } from 'src/persona/dto/create-persona.dto';
import { Model, Sequelize } from 'sequelize';
import { isEmpty } from 'class-validator';

@Injectable()
export class EmpleadoService {

    constructor(@InjectModel(EmpleadoEntity) private empleadoModel: typeof EmpleadoEntity, 
                @InjectModel(PersonaEntity) private personaModel: typeof PersonaEntity){}

    async postEmpleado(persona, empleado): Promise<object>{
        const transaccion = await this.empleadoModel.sequelize.transaction();
        try{            
            
        
            const person = await this.personaModel.create(persona, {transaction:transaccion});
            const employee = await this.empleadoModel.create({contrasenia: empleado.contrasenia, 
                                                            curp: empleado.curp, 
                                                            fecha_contratacion: empleado.fecha_contratacion, 
                                                            puesto: empleado.puesto, 
                                                            salario: empleado.salario, 
                                                            id_persona: person.id_persona}, {transaction: transaccion});

            await transaccion.commit();
            return {persona: person, empleado: employee};

            
           

        }catch(error){
            console.log(error);
            await transaccion.rollback();
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

    async getEmpleados(): Promise<object>{

        try{

            const employees = await this.empleadoModel.findAll({where: {estatus: true}, include: PersonaEntity});

            if(employees.length === 0){
                throw new HttpException('No hay empleados registrados', 404);
            }

            return employees;

        }catch(error){
            throw error
        }

    }

    async deleteEmpleado(id:number): Promise<object>{
        try{

            const employee = await this.empleadoModel.findOne({where: {id_empleado: id, estatus: true}});

            if(!employee){
                throw new HttpException('Empleado no encontrado', 404);
            }

            const eliminar = await this.empleadoModel.update({estatus: false}, {where: {id_empleado: id}});

            return employee;

        }catch(error){
            throw error;
        }
    }



}
