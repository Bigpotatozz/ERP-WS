import { BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { ClienteEntity } from "src/cliente/entities/cliente.entity";

@Table({
    tableName: 'ventas',
    timestamps: false,
    paranoid: false
})
export class VentaEntity {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_venta: number;
    @Column({
        type: DataType.FLOAT
    })
    total: number;
    @Column({
        type: DataType.DATE
    })
    fecha_venta: Date;

    @ForeignKey(() => ClienteEntity)
    id_cliente: number;
    
    @BelongsTo(() => ClienteEntity)
    cliente: ClienteEntity;
}