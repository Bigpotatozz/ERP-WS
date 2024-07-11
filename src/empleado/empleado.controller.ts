import { Body, Controller, Post, Res } from '@nestjs/common';
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


}
