import { IsNumber, IsString } from "class-validator";


export class UpdateEmpleadoDto{

    @IsString()
    contrasenia: string;
    @IsString()
    puesto: string;
    @IsNumber()
    salario: number;
    @IsNumber()
    id_sucursal: number;

}