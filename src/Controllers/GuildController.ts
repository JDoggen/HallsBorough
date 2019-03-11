import { GuildService } from "../Services/GuildService";
import * as q from 'q';
import { IGuildDTO } from "../DAOs/DataObjects/GuildDTO";

export class GuildController{
    constructor(
        private guildService: GuildService
    ){
    }

    public fetchGuildData(guildid: string) : q.Promise<IGuildDTO> {
        return this.guildService.fetchGuildData(guildid);
    }


}