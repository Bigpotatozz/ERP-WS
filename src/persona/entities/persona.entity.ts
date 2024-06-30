
import { Column, DataType, Table, Model } from "sequelize-typescript";


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

}