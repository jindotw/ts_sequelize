import { AutoIncrement, Column, DataType, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BroadcastId } from "./dataTypes";
import { BroadcastScoreEntity } from "./broadcastScoreEntity";

@Table({
  tableName: "broadcast_test",
  timestamps: true,
})
export class BroadcastEntity extends Model<BroadcastEntity> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id!: BroadcastId;

  @Column(DataType.CHAR)
  public title!: string;

  @Column(DataType.DATE)
  public createdAt!: Date;

  @Column(DataType.DATE)
  public updatedAt!: Date;

  @HasOne(() => BroadcastScoreEntity, { foreignKey: "broadcast_id", sourceKey: "id" })
  public scores!: BroadcastScoreEntity;
}
