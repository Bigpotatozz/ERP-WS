import { IsNumber, IsString } from "class-validator";

export class createDireccion {
    @IsString()
    calle: string;
    @IsString()
    colonia: string;
    @IsString()
    codigo_postal: string;
    @IsString()
    numero_exterior: string;
    @IsString()
    numero_interior: string;
    @IsString()
    municipio: string;
    @IsString()
    estado: string;
    @IsString()
    pais: string;
    @IsString()
    latitud: string;
    @IsString()
    longitud: string;
    @IsNumber()
    id_cliente: number;
}