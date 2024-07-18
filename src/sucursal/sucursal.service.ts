import { InjectModel } from '@nestjs/sequelize';
import { SucursalEntity } from './entities/sucursal.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SucursalService {
    constructor(@InjectModel(SucursalEntity) sucursal: SucursalEntity){}

    async postSucursal(sucursal): Promise<object>{
        return null;
    }

}
