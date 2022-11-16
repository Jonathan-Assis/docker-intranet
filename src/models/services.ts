import { MysqlDBDataSource, dataSourceStart } from "./db";
import {User} from "./user"

export class Service{    
    start(){
        dataSourceStart();
    }
    insert(usuario: User){
        MysqlDBDataSource.manager.save(usuario);
        return usuario;
    }
    async listAll(){
        let list = await MysqlDBDataSource.manager.find(User);
        return list;
    }
}