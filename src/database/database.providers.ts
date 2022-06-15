import { Sequelize } from "sequelize-typescript";
import { user_details } from "src/model/user.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: '192.168.192.201',
                port: 5432,
                username: 'dev_user',
                password: "S73Hqloe39dNskYwLsA",
                database: 'dev_db',
                models: [user_details],
                define: {
                    timestamps: false,
                }
            });
            // sequelize.addModels([user_details]);
            // await sequelize.sync();
            return sequelize;
        }
    }
];
