import { Model,BelongsTo, Column, DataType, ForeignKey, Table, BelongsToMany } from "sequelize-typescript";
import { ClienteEntity } from "src/cliente/entities/cliente.entity";
import { DetalleVentaEntity} from "src/detalle_venta/entities/detalle_venta.entity";
import { ProductoEntity } from "src/producto/entities/producto.entity";

@Table({
    tableName: 'ventas',
    timestamps: false,
    paranoid: false
})
export class VentaEntity extends Model{
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
    
    @BelongsTo(() => ClienteEntity, { foreignKey: 'id_cliente', targetKey: 'id_cliente'})
    cliente: ClienteEntity;

    @BelongsToMany(() => ProductoEntity, () => DetalleVentaEntity)
    producto: ProductoEntity[];
}