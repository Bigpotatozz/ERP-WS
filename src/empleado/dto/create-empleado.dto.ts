import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsDate, NotNull } from "sequelize-typescript";

export class CreateEmpleado{

    @IsString()
    @IsNotEmpty()
    contrasenia: string;

    @IsString()
    @IsNotEmpty()
    curp: string;

    @IsString()
    @IsNotEmpty()
    @Type(()=> Date)
    fecha_contratacion: Date;

    @IsString()
    @IsNotEmpty()
    puesto: string;

    @IsNumber()
    @IsNotEmpty()
    salario: number;

}