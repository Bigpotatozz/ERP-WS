import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePersona {

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    apellido_paterno: string;
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    apellido_materno: string;
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    edad: number;
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    genero: string;
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    rfc: string;
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    correo: string;
}