import { IsString } from "class-validator";
import { Is } from "sequelize-typescript";


export class UpdateCliente {

    @IsString()
    nombre_empresa: string;
    @IsString()
    correo: string;
    @IsString()
    telefono: string;
}