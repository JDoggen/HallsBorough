import * as fs from 'fs';
import { IConfig } from '../Models/IConfig';
import { Bot } from './Bot';
import {Delegator} from '../Delegator/Delegator';
const config = require('../Config/config.json');

export class HallsBorough{

    private config: IConfig;
    private bot : Bot;

    private delegator : Delegator;

    constructor(){
        this.readConfig();
        this.bot = new Bot(this.config.token);
        this.createDAOs();
        this.createServices();
        this.createControllers();
        this.createDelegator();
    }

    private readConfig() : IConfig{
        return this.config = config as IConfig;
    }

    
    private createDAOs() : void{

    }

    private createServices() : void{

    }

    private createControllers() : void{

    }

    private createDelegator() : void{
        this.delegator = new Delegator(this.bot);
        this.bot.setDelegator(this.delegator);
    }
}