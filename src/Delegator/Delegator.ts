import { Bot } from "../Application/Bot";
import * as Discord from 'discord.js';

export class Delegator{
    
    constructor(
        private bot: Bot
    ){

        
    }

    public incomingMessage(message : Discord.Message){
        console.log('ping');
    }
}