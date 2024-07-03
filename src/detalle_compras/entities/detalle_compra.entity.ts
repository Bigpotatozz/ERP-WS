import { Model,BelongsTo, Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { CompraEntity } from "src/compra/entities/compra.entity";
import { ProductoEntity } from "src/producto/entities/producto.entity";


@Table({
    tableName: 'detalle_compras',
    timestamps: false,
    paranoid: false
})
export class DetalleCompraEntity extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_detalle_compra: number;

    @Column({
        type: DataType.FLOAT
    })
    cantidad: number;

    @Column({
        type: DataType.FLOAT
    })
    total: number;

    @ForeignKey(() => ProductoEntity)
    id_producto: number;

    @ForeignKey(() => CompraEntity)
    id_compra: number;

    @BelongsTo(() => ProductoEntity, { foreignKey: 'id_producto', targetKey: 'id_producto' })
    producto: ProductoEntity;

    @BelongsTo(() => CompraEntity, { foreignKey: 'id_compra', targetKey: 'id_compra' })
    compra: CompraEntity;

}