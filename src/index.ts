import {Sequelize} from "sequelize-typescript";
import {BroadcastEntity} from "./models/broadcastEntity";
import {BroadcastScoreEntity} from "./models/broadcastScoreEntity";


(async () => {
  const conn = new Sequelize({
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    database: "cherrytv_dev",
    username: "postgres",
    password: "postgres",
    define: {
      underscored: true,
    },
  });
  conn.addModels([BroadcastEntity, BroadcastScoreEntity]);

  const items = await BroadcastEntity.findAll({
    include: [{
      model: BroadcastScoreEntity,
      attributes: [],
      required: false,
    }],
    order: [
      [Sequelize.literal("coalesce(scores.total_score, 0)"), "DESC"],
      ["id", "ASC"],
    ]
  });
  items.forEach(b => {
    console.log(`${b.id} => ${b.title} (${b.scores?.total_score})`);
  });
  await conn.close();
})();
