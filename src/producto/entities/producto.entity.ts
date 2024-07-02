import { Column, DataType } from "sequelize-typescript";

export class ProductoEntity {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_producto: number;
    @Column({
        type: DataType.STRING
    })
    nombre: string;
    @Column({
        type: DataType.FLOAT
    })
    precio: number;
    @Column({
        type: DataType.STRING
    })
    descripcion: string;
    @Column({
        type: DataType.INTEGER
    })
    stock: number;


}

