import { IsNumber, IsString } from "class-validator";
import { updatePersona } from "src/persona/dto/update-persona.dto";

export class updateEmpleado{

    @IsString()
    contrasenia: string;
    @IsString()
    puesto: string;
    @IsNumber()
    salario: number;
    @IsNumber()
    id_sucursal: number;

}