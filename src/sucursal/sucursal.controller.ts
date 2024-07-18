import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Controller('/sucursal')
export class SucursalController {
  constructor(private readonly sucursalService: SucursalService) {}


  @Post('/postSucursal/')
  async postSucursal(@Body() sucursal: CreateSucursalDto, @Res() res){
      try{

        const branch = await this.sucursalService.postSucursal(sucursal);

        return res.status(200).json({message: 'Sucursal creada', branch});

      }catch(error: any){
          return res.status(error.status).json({message: error})
      }
  }


  @Get('/getSucursales/')
  async getSucursales(@Res() res, @Param('id') id_sucursal: number){
    try{
      const branches =  await this.sucursalService.getSucursales();

      return res.status(200).json({message: 'Lista de sucursales', branches});

    }catch(error: any){
        return res.status(error.status).json({message: error})
    }
  }

  @Get('/getSucursal/:id')
  async getSucursal(@Res() res , @Param('id') id_sucursal: number){
    try{
      const branch = await this.sucursalService.getSucursal(id_sucursal);

      return res.status(200).json({message: 'Sucursal encontrada', branch});

    }catch(error: any){
        return res.status(error.status).json({message: error})
    }
  }

  @Put('/updateSucursal/')
  async updateSucursal(@Body() data: {id_sucursal: number, sucursal: UpdateSucursalDto}, @Res() res){
    try{

      const branch = await this.sucursalService.updateSucursal(data.id_sucursal, data.sucursal);

      return res.status(200).json({message: 'Sucursal actualizada', branch});

    }catch(error: any){
        return res.status(error.status).json({message: error})
    }
  }

  @Put('/deleteSucursal/:id')
  async deleteSucursal(@Res() res, @Param('id') id_sucursal: number){
    try{
      const branch = await this.sucursalService.deleteSucursal(id_sucursal);

      return res.status(200).json({message: 'Sucursal eliminada', branch});

    }catch(error: any){
        return res.status(error.status).json({message: error})
    }
  }




}
