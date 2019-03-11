import * as q from 'q';
import { GuildDAO } from "../DAOs/GuildDAO";
import { IGuildDTO } from '../DAOs/DataObjects/GuildDTO';

export class GuildService{

    constructor(
        private guildDAO : GuildDAO
    ){}

    public fetchGuildData(guildid: string) : q.Promise<IGuildDTO>{
        let defer = q.defer<IGuildDTO>()
        this.guildDAO.guildExists(guildid)
        .then(guildExists =>{
            if(guildExists){
                this.guildDAO.fetchGuildData(guildid)
                .then(guildData=>{
                    defer.resolve(guildData);
                })
                .catch(err => {
                    defer.reject(err);
                })
            }else{
                this.guildDAO.createGuildData(guildid)
                .then(result =>{
                    this.guildDAO.fetchGuildData(guildid)
                    .then(guildData=>{
                        defer.resolve(guildData);
                    })
                    .catch(err =>{
                        defer.reject(err);
                    })
                })
                .catch(err =>{
                    defer.reject(err);
                })
            }
        })
        .catch(err =>{
            defer.reject(false);
        })
        return defer.promise;
    }
}