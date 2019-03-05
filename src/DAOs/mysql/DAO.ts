import * as mysql from 'mysql';
import { IMySQLConfig } from '../../Models/IMySQLconfig';
const mysqlConfig = require('../mysql/mysql.json');

export class DAO{
    private config : IMySQLConfig
    private connection : mysql.Connection;

    constructor(){
        this.config = mysqlConfig as IMySQLConfig;
        this.connection = this.createConnection();
        this.connection.connect(this.connected);
    }


    private createConnection() : mysql.Connection{
        return mysql.createConnection({
            host: this.config.host,
            user: this.config.user,
            password: this.config.password,
            port: this.config.port
        })
    }

    private connected(err: mysql.MysqlError){
        if(err){throw err}
        console.log('connected');
    }

    
    
}