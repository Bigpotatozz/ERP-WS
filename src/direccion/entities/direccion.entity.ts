import { Model, Column, DataType, ForeignKey, Table, BelongsTo } from "sequelize-typescript";
import { ClienteEntity } from "src/cliente/entities/cliente.entity";


@Table({
    tableName: 'direcciones',
    timestamps: false,
    paranoid: false
})
export class DireccionEntity extends Model{

    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id_direccion: number;
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
    codigo_postal: string;
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
    municipio: string;
    @Column({
        type: DataType.STRING
    })
    estado: string;
    @Column({
        type: DataType.STRING
    })
    pais: string;
    @Column({
        type: DataType.STRING
    })
    latitud: string;
    @Column({
        type: DataType.STRING
    })
    longitud: string;
    @ForeignKey(() => ClienteEntity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_cliente: number;
    
    @BelongsTo(() => ClienteEntity, { foreignKey: 'id_cliente', targetKey: 'id_cliente' })
    cliente: ClienteEntity;

}