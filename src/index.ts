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
      model:BroadcastScoreEntity,
      required: false,
    }],
    order: [
      [Sequelize.literal("coalesce(scores.score, 0)"), "DESC"],
      ["id", "DESC"],
    ]
  });
  items.forEach(b => {
    console.log(`${b.id} => ${b.title}, ${b.scores?.score}`);
  });
  await conn.close();
})();
