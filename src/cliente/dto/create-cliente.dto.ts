import { IsNumber, IsString } from "class-validator";


export class CreateCliente {


    @IsString()
    nombre_empresa: string;
    @IsString()
    telefono: string;
    @IsNumber()
    id_persona: number;

}