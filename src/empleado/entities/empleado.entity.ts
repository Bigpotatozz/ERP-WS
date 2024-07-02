import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { PersonaEntity } from "src/persona/entities/persona.entity";
import { SucursalEntity } from "src/sucursal/entities/sucursal.entity";


@Table({
    tableName: 'empleados',
    timestamps: false,
    paranoid: false
})
export class EmpleadoEntity extends Model{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_empleado: number;
    @Column({
        type: DataType.STRING
    })
    contrasenia: string;
    @Column({
        type: DataType.STRING
    })
    curp: string;
    @Column({
        type: DataType.DATE
    })
    fecha_contratacion: Date;
    @Column({
        type: DataType.STRING
    })
    puesto: string;
    @Column({
        type: DataType.FLOAT
    })
    salario: number;
    @Column({
        type: DataType.BOOLEAN
    })
    estatus: boolean;

    @ForeignKey(() => PersonaEntity)
    @Column
    id_persona: number;

    @BelongsTo(() => PersonaEntity, { foreignKey: 'id_persona', targetKey: 'id_persona'})
    persona: PersonaEntity

    
    @ForeignKey(() => SucursalEntity)
    @Column({})
    id_sucursal: number;

    @BelongsTo(() => SucursalEntity, { foreignKey: 'id_sucursal', targetKey: 'id_sucursal'})
    sucursal: SucursalEntity

}