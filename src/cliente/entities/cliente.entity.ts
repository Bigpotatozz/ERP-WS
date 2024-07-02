
import {Model, BelongsTo, Column, DataType, ForeignKey, Table, HasOne } from "sequelize-typescript";
import { PersonaEntity } from "src/persona/entities/persona.entity";

@Table({
    tableName: 'clientes',
    timestamps: false,
    paranoid: false
})
export class ClienteEntity extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    id_cliente: number;
    @Column({
        type: DataType.STRING
    
    })
    nombre_empresa: string;
    @Column({
        type: DataType.STRING
    
    })
    correo: string;
    @Column({
        type: DataType.STRING
    })
    telefono: string;
    @Column({
        type: DataType.STRING
    })
    calle: string;
    @Column({
        type: DataType.BOOLEAN
    })
    estatus: boolean;

    @ForeignKey(() => PersonaEntity)
    @Column({
        type: DataType.INTEGER
    })
    id_persona: number;

    @BelongsTo(() => PersonaEntity, { foreignKey: 'id_persona', targetKey: 'id_persona'})
    persona: PersonaEntity
    
}

