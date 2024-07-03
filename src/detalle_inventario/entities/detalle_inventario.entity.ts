import { Model,Column, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { InventarioEntity } from '../../inventario/entities/inventario.entity';
import { ProductoEntity } from "src/producto/entities/producto.entity";


@Table({
    tableName: "detalle_inventario",
    timestamps: false,
    paranoid: false
})
export class DetalleInventarioEntity extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_detalle_inventario: number;

    @Column({
        type: DataType.INTEGER
    })
    cantidad: number;

    @ForeignKey(() => InventarioEntity)
    id_inventario: number;

    @ForeignKey(() => ProductoEntity)
    id_producto: number;

    @BelongsTo(() => InventarioEntity, { foreignKey: 'id_inventario', targetKey: 'id_inventario'})
    inventario: InventarioEntity;

    @BelongsTo(() => ProductoEntity, { foreignKey: 'id_producto', targetKey: 'id_producto'})
    producto: ProductoEntity;

}