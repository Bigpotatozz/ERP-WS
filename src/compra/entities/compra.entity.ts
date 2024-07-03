import { Model, Column, DataType, ForeignKey, Table, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { DetalleCompraEntity } from "src/detalle_compras/entities/detalle_compra.entity";
import { ProductoEntity } from "src/producto/entities/producto.entity";
import { SucursalEntity } from "src/sucursal/entities/sucursal.entity";


@Table({
    tableName: 'compras',
    timestamps: false,
    paranoid: false
})
export class CompraEntity extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_compra: number;
    @Column({
        type: DataType.DATE
    })
    fecha_compra: Date;

    @ForeignKey(() => SucursalEntity)
    id_sucursal: number;

    @BelongsTo(() => SucursalEntity, { foreignKey: 'id_sucursal', targetKey: 'id_sucursal' })
    sucursal: SucursalEntity;

    @BelongsToMany(() => ProductoEntity, () => DetalleCompraEntity)
    productos: ProductoEntity[];

}