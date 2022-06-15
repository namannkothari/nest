import { Column, Model, Table } from "sequelize-typescript";

@Table
export class user_details extends Model {
    @Column({ primaryKey: true, autoIncrement: true, type: "INTEGER" })
    id: number;

    @Column({ allowNull: false, type: "varchar(255)" })
    first_name: string;
    
    @Column({ allowNull: false, type: "varchar(255)" })
    last_name: string;

    @Column({ allowNull: false, type: "varchar(255)", unique: true })
    email: string;

    @Column({ allowNull: false, type: "varchar()" })
    password: string;

    @Column({ allowNull: false, type: "boolean", defaultValue: false })
    emailVerified: boolean;
}
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class user_details {
//     @PrimaryGeneratedColumn({
//         type: 'int',
//         name: 'user_id',
//     })
//     id: number;

//     @Column({
//         type: 'varchar',
//         name: 'first_name',
//         length: '255',
//         nullable: false,
//     })
//     firstName: string;

//     @Column({
//         type: 'varchar',
//         name: 'last_name',
//         length: '255',
//         nullable: false,
//     })
//     lastName: string;

//     @Column({
//         type: 'varchar',
//         name: 'user_email',
//         nullable: false,
//         unique: true,
//     })
//     email: string;

//     @Column({
//         type: 'varchar',
//         name: 'user_password',
//         nullable: false,
//     })
//     password: string;

//     @Column({
//         type: 'boolean',
//         name: 'user_email_verified',
//         nullable: false,
//         default: false,
//     })
//     emailVerified: boolean;
// }