import {BelongsTo, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {BroadcastId} from "./dataTypes";
import {BroadcastEntity} from "./broadcastEntity";

@Table({
  tableName: "broadcast_scores_test",
  timestamps: true,
})
export class BroadcastScoreEntity extends Model<BroadcastScoreEntity> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: BroadcastId;

  @Column(DataType.INTEGER)
  public score!: number;

  @BelongsTo(() => BroadcastEntity, "id")
  public broadcasts!: BroadcastEntity;
}
