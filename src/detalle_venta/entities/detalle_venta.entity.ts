import { Table , Model, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript";
import { ProductoEntity } from "src/producto/entities/producto.entity";
import { VentaEntity } from "src/venta/entities/venta.entity";


@Table({
    tableName: 'detalles_venta',
    timestamps: false,
    paranoid: false
})
export class DetalleVentaEntity extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_detalle_venta: number;

    @Column({
        type: DataType.FLOAT
    })
    cantidad: number;

    @Column({
        type: DataType.FLOAT
    })
    subtotal: number;

    @ForeignKey(() => ProductoEntity)
    id_producto: number;

    @ForeignKey(() => VentaEntity)
    id_venta: number;

    @BelongsTo(() => ProductoEntity, { foreignKey: 'id_producto', targetKey: 'id_producto'})
    producto: ProductoEntity;

    @BelongsTo(() => VentaEntity, { foreignKey: 'id_venta', targetKey: 'id_venta'})
    venta: VentaEntity[];

}