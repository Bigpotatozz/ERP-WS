
import { Column, DataType, Table, Model, HasOne } from "sequelize-typescript";
import { ClienteEntity } from "src/cliente/entities/cliente.entity";
import { EmpleadoEntity } from "src/empleado/entities/empleado.entity";


@Table({
    tableName: 'personas',
    timestamps: false,
    paranoid: false

})
export class PersonaEntity extends Model<PersonaEntity> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_persona: number;
    @Column({
        type: DataType.STRING
    })
    nombre: string;
    @Column({
        type: DataType.STRING
    })
    apellido_paterno: string;
    @Column({
        type: DataType.STRING
    })
    apellido_materno: string;
    @Column({
        type: DataType.INTEGER
    })
    edad: number;
    @Column({
        type: DataType.STRING
    })
    genero: string;
    @Column({
        type: DataType.STRING
    })
    rfc: string;
    @Column({
        type: DataType.STRING
    })
    correo: string;   

    @HasOne(() => ClienteEntity)
    cliente: ClienteEntity;

    @HasOne(() => EmpleadoEntity)
    empleado: EmpleadoEntity
}

