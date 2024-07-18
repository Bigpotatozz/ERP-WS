import { IsString } from "class-validator";

export class UpdateSucursalDto {
   
    @IsString()
    nombre:string;
    @IsString()
    calle:string;
    @IsString()
    colonia:string;
    @IsString()
    numero_exterior:string;
    @IsString()
    numero_interior:string;
    @IsString()
    estado:string;
    @IsString()
    municipio:string;
    
}