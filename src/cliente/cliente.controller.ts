import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreatePersona } from 'src/persona/dto/create-persona.dto';
import { CreateCliente } from './dto/create-cliente.dto';
import { createDireccion } from 'src/direccion/dto/create-direccion.dto';
import { UpdateCliente } from './dto/update-cliente.dto';
import { UpdatePersonaDto } from 'src/persona/dto/update-persona.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}


  @Post('/postCliente')
  async postCliente(@Body() data: {persona: CreatePersona, cliente: CreateCliente, direccion: createDireccion}, @Res() res){

    try{

      const response =  await this.clienteService.postCliente(data.persona, data.cliente, data.direccion);

      return res.status(200).send({
        message: 'Cliente creado con éxito',
        data: response
      });

    }catch(error: any){
      res.status(500).send({
        message: 'Error en la solicitud',
        error: error
      })
    }

  }


  @Put('/updateCliente')
  async putCliente(@Body() data: {id_cliente: number, persona: UpdatePersonaDto, cliente: UpdateCliente}, @Res() res){

    try{

      const response =  await this.clienteService.updateCliente(data.id_cliente, data.cliente, data.persona);

      return res.status(200).send({
        message: 'Cliente actualizado con éxito',
        data: response
      });

    }catch(error: any){
      console.log(error)
      res.status(500).send({
        message: 'Error en la solicitud',
        error: error
      })
    }

  }

  @Put('/deleteCliente/:id')
  async deleteCliente(@Param('id') id_cliente: number , @Res() res){
    
    try{

      const response = await this.clienteService.deleteClente(id_cliente);

      return res.status(200).send({
        message: 'Cliente eliminado con éxito',
        data: response
      })


    }catch(error: any){
      res.status(500).send({
        message: 'Error en la solicitud',
        error: error
      })
    }
  
  }
  @Get('/getClientes/')
  async getClientes(@Res() res){

    try{
      const response = await this.clienteService.getClientes();
      return res.status(200).send({
       response
      });

    }catch(error){
      res.status(500).send({
        message: 'Error en la solicitud',
        error: error
      })
    }
  
  }

  @Get('/getCliente/:id')
  async getCliente(@Param('id') id_cliente: number, @Res() res){

    try{
      const response = await this.clienteService.getCliente(id_cliente);
      return res.status(200).send({
        response
      });
    }catch(error: any){
      res.status(500).send({
        message: 'Error en la solicitud',
        error: error
      })
    }

  }


}
