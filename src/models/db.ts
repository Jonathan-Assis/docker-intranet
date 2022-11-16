import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./user"

export const MysqlDBDataSource = new DataSource({
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "root",
    database: "intranet",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

export function dataSourceStart(){
    MysqlDBDataSource.initialize().then(()=>{
        console.log("Inicializada a fonte de dados...",);
    }).catch((err)=>{
        console.error("Erro de inicialização da fonte de dados", err);
    }) 
}