import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreatePersona } from 'src/persona/dto/create-persona.dto';
import { CreateEmpleado } from './dto/create-empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) {}


  @Post('/postEmpleado')
  async postEmpleado(@Body() data: {persona: CreatePersona, empleado: CreateEmpleado}, @Res() res){

    try{
        const response = await this.empleadoService.postEmpleado(data.persona, data.empleado);
        return res.status(200).send(response);
    }catch(error){
        return res.status(500).send({message: 'Error en el servidor'});

  }
}

@Get('/getEmpleado/:id')
async getEmpleado(@Res() res, @Param('id') id_usuario: number){

  try{

    const response  = await this.empleadoService.getEmpleado(id_usuario);

    return res.status(200).send(response);

  }catch(error: any){
  
    return res.status(error.status).send({message: error.message});
    
  }

}

@Get('/getEmpleados/')
async getEmpleados (@Res() res){

  try{

    const empleados = await this.empleadoService.getEmpleados();

    return res.status(200).send({
      empleados: empleados
    })

  }catch(error: any){
    return res.status(error.status).send({message: error.message})
  }

}


@Put('/deleteEmpleado/')
async deleteEmpleado(@Res() res, @Body('id_usuario') id_usuario: number){

  try{

    const response = await this.empleadoService.deleteEmpleado(id_usuario);

    return res.status(200).send(response);

  }catch(error: any){
    return res.status(error.status).send({message: error.message})
  }

}

@Put('/updateEmpleado/')
async updateEmpleado(@Res() res, @Body() data: {id_empleado: number, empleado: CreateEmpleado, persona: CreatePersona}){
  try{

    const response = await this.empleadoService.updateEmpleado(data.id_empleado, data.empleado, data.persona);
    
    return res.status(200).send(response);

  }catch(error: any){
    console.log(error);
    return res.status(error.status).send({message: error.message})
  }
}



}
