import { IsString } from "class-validator";


export class CreateCliente {


    @IsString()
    nombre_empresa: string;
    @IsString()
    correo: string;
    @IsString()
    telefono: string;
    @IsString()
    calle: string;


}