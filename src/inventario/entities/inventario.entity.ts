import { Model, Column, DataType, Table, BelongsTo, ForeignKey, BelongsToMany } from "sequelize-typescript";
import { DetalleInventarioEntity,} from "src/detalle_inventario/entities/detalle_inventario.entity";
import { ProductoEntity } from "src/producto/entities/producto.entity";
import { SucursalEntity } from "src/sucursal/entities/sucursal.entity";


@Table({
    tableName: 'inventarios',
    timestamps: false,
    paranoid: false

})
export class InventarioEntity extends Model{

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_inventario: number;

    @Column({
        type: DataType.BOOLEAN
    })
    estatus: boolean;

   
    @ForeignKey(() => SucursalEntity)
    id_sucursal: number;

    @BelongsTo(() => SucursalEntity, { foreignKey: 'id_sucursal', targetKey: 'id_sucursal'})
    sucursal: SucursalEntity;

    @BelongsToMany(() => ProductoEntity, () => DetalleInventarioEntity)
    producto: ProductoEntity[];

   

}