import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ClienteEntity } from './entities/cliente.entity';
import { PersonaEntity } from 'src/persona/entities/persona.entity';
import { DireccionEntity } from 'src/direccion/entities/direccion.entity';
import { CreatePersona } from 'src/persona/dto/create-persona.dto';
import { CreateCliente } from './dto/create-cliente.dto';
import { createDireccion } from 'src/direccion/dto/create-direccion.dto';
import { Sequelize } from 'sequelize';
import { UpdateCliente } from './dto/update-cliente.dto';
import { UpdatePersonaDto } from 'src/persona/dto/update-persona.dto';

@Injectable()
export class ClienteService {

    constructor(@InjectModel(ClienteEntity) private clienteModel: typeof ClienteEntity,
                @InjectModel(PersonaEntity) private personaModel: typeof PersonaEntity,
                @InjectModel(DireccionEntity) private direccionModel: typeof DireccionEntity){}


    async postCliente(persona: CreatePersona, cliente: CreateCliente, direccion: createDireccion): Promise<object>{

        const transaccion = await this.clienteModel.sequelize.transaction();

        try{
            const person = await this.personaModel.create(persona, {transaction: transaccion});
            const client = await this.clienteModel.create({nombre_empresa: cliente.nombre_empresa, telefono: cliente.telefono, id_persona: person.id_persona}, {transaction: transaccion});
            const address = await this.direccionModel.create({calle: direccion.calle, colonia: direccion.colonia, codigo_postal: direccion.codigo_postal,
                                                                numero_exterior: direccion.numero_exterior,numero_interior: direccion.numero_interior,
                                                                municipio: direccion.municipio, estado: direccion.estado, pais: direccion.pais,
                                                                latitud: direccion.latitud, longitud: direccion.longitud, id_cliente: client.id_cliente}, {transaction: transaccion});
            await transaccion.commit();
            return {persona: person, cliente: client, direccion: address}
                                

        }catch(error){
            await transaccion.rollback();
            throw error;
        }
 
    };

    async updateCliente(id_cliente: number, cliente: UpdateCliente, persona: UpdatePersonaDto): Promise<object>{

        try{

            const client = await this.clienteModel.findOne({where: {id_cliente}});
            const person = await this.personaModel.findOne({where: {id_persona: client.id_persona}});

            const updatedClient = await client.update(cliente);
            const updatedPerson = await person.update(persona);
            
            return {cliente: updatedClient, persona: updatedPerson};

        }catch(error){
            throw error;
        }

    };

    async deleteClente(id_cliente: number): Promise<object>{
        try{
            const client = await this.clienteModel.findOne({where: {id_cliente}});
            const deletedClient = await client.update({estatus: false}); 


            return {cliente: deletedClient};

        }catch(error){
            throw error;
        }
    }

    async getClientes(): Promise<object>{
        try{
            const clients = await this.clienteModel.findAll({where: {estatus: true}});
            return {clientes: clients};
        }catch(error){
            throw error;
        }
    }

    async getCliente(id_cliente: number): Promise<object>{
        try{
            const client = await this.clienteModel.findOne({where: {id_cliente, estatus: true}});
            return {cliente: client};
        }catch(error){
            throw error;
        }
    }
    
    


}
