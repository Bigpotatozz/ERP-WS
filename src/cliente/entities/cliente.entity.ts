
import {Model, BelongsTo, Column, DataType, ForeignKey, Table, HasOne, HasMany } from "sequelize-typescript";
import { DireccionEntity } from "src/direccion/entities/direccion.entity";
import { PersonaEntity } from "src/persona/entities/persona.entity";
import { VentaEntity } from "src/venta/entities/venta.entity";

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
    telefono: string;
    @Column({
        type: DataType.STRING,
        defaultValue: true
    })  
    estatus: boolean;

    @ForeignKey(() => PersonaEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_persona: number;

    @BelongsTo(() => PersonaEntity, { foreignKey: 'id_persona', targetKey: 'id_persona'})
    persona: PersonaEntity

    @HasMany(() => DireccionEntity)
    direccion: DireccionEntity

    @HasMany(() => VentaEntity)
    venta: VentaEntity
    
}

