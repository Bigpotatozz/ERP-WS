import { BelongsTo, BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { CompraEntity } from "src/compra/entities/compra.entity";
import { DetalleCompraEntity } from "src/detalle_compras/entities/detalle_compra.entity";
import { DetalleInventarioEntity } from "src/detalle_inventario/entities/detalle_inventario.entity";
import { DetalleVentaEntity} from "src/detalle_venta/entities/detalle_venta.entity";
import { InventarioEntity } from "src/inventario/entities/inventario.entity";
import { VentaEntity } from "src/venta/entities/venta.entity";



@Table({
    tableName: "producto",
    timestamps: false,
    paranoid: false
})
export class ProductoEntity extends Model{
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

    @BelongsToMany(() => VentaEntity, () => DetalleVentaEntity)
    venta: VentaEntity[];

    @BelongsToMany(() => InventarioEntity, () => DetalleInventarioEntity)
    inventario: InventarioEntity[];

    @BelongsToMany(() => CompraEntity, () => DetalleCompraEntity)
    compras: CompraEntity[];



}

