import { Model,Column, DataType, Table, HasMany } from "sequelize-typescript";
import { EmpleadoEntity } from "src/empleado/entities/empleado.entity";


@Table({
    tableName: 'sucursales',
    timestamps: false,
    paranoid: false
})
export class SucursalEntity extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true})
    id_sucursal: number;

    @Column({
        type: DataType.STRING
    })
    nombre: string;
    @Column({
        type: DataType.STRING
    })
    calle: string;
    @Column({
        type: DataType.STRING
    })
    colonia: string;
    @Column({
        type: DataType.STRING
    })
    numero_exterior: string;
    @Column({
        type: DataType.STRING
    })
    numero_interior: string;
    @Column({
        type: DataType.STRING
    })
    estado: string;
    @Column({
        type: DataType.STRING
    })
    municipio: string;

    @HasMany(() => EmpleadoEntity)
    empleados: EmpleadoEntity[];

}