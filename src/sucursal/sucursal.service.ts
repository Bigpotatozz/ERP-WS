import { InjectModel } from '@nestjs/sequelize';
import { SucursalEntity } from './entities/sucursal.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';

@Injectable()
export class SucursalService {
    constructor(@InjectModel(SucursalEntity) sucursal: SucursalEntity){}

    async postSucursal(sucursal): Promise<object>{
        
        try{

            const branch  = await SucursalEntity.create(sucursal);

            return branch;

        }catch(error){
            throw error;
        }
    }


    async getSucursales(): Promise<object>{
        try{

            const branches = await SucursalEntity.findAll({where: {estatus: true}});

            if(!branches){
                throw new HttpException('No se encontraron sucursales', 404);
            }

            return branches;


        }catch(error){
            throw error;
        }
    }

    async getSucursal(id_sucursal: number): Promise<object>{

        try{

            const branch = await SucursalEntity.findOne({where: {id_sucursal}});
            if(!branch){
                throw new HttpException('No se encontro la sucursal', 404);
            }

            return branch;


        }catch(error){
            throw error;
        }

    }

    async updateSucursal(id_sucursal: number, sucursal: UpdateSucursalDto): Promise<object>{

        try{

            const branch = await SucursalEntity.findOne({where: {id_sucursal}});

            if(!branch){
                throw new HttpException('No se encontro la sucursal', 404);
            }

            const branchUpdated = await branch.update(sucursal);

            return branchUpdated;

        }catch(error){
            throw error;
        }

    }

    async deleteSucursal(id_sucursal: number): Promise<object>{
        try{

            const branch = await SucursalEntity.findOne({where: {id_sucursal}});
            if(!branch){
                throw new HttpException('No se encontro la sucursal', 404);
            }
            const deletedBranch = await branch.update({estatus: false});

            return deletedBranch;
        }catch(error){
            throw error;
        }
    }

}
