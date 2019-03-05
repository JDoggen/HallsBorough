import * as mysql from 'mysql';
import { IMySQLConfig } from '../../Models/IMySQLconfig';
import * as q from 'q';

const mysqlConfig = require('../mysql/mysql.json');

export class DAO{
    private config : IMySQLConfig
    private connection : mysql.Connection;

    constructor(){
        this.config = mysqlConfig as IMySQLConfig;
        this.connection = this.createConnection();
        this.connection.connect(this.connected);
    }

    public execute(query: string, parameters?: string[]){
        let defer = q.defer();
        let options : mysql.QueryOptions = {
            sql: query,
            values: parameters
        }
        this.connection.query(options, function(err, result){
            console.log('err:');
            console.log(err);
            console.log('result:');
            console.log(result);
        });

        return defer.promise;
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
        this.execute('SELECT * FROM ')
    }

    
    
}