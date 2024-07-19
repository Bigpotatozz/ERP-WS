import { IsNumber, IsString } from "class-validator";

export class UpdatePersonaDto {

    @IsString()
    nombre: string;
    @IsString()
    apellido_paterno: string;
    @IsString()
    apellido_materno: string;
    @IsNumber()
    edad: number;
    @IsString()
    genero: string;
    @IsString()
    rfc: string;
    @IsString()
    correo: string;

}