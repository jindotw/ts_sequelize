import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { BroadcastId } from "./dataTypes";

@Table({
  tableName: "broadcast_scores_test",
  timestamps: true,
})
export class BroadcastScoreEntity extends Model<BroadcastScoreEntity> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public broadcast_id!: BroadcastId;

  @Column(DataType.INTEGER)
  public total_score!: number;

  // @BelongsTo(() => BroadcastEntity, "id")
  // public broadcasts!: BroadcastEntity;
}
