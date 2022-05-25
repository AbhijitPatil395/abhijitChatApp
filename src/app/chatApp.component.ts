import { Component } from "@angular/core";
import { Channel } from "./channel";
import { channelService } from "./channel.service";
import { chatService } from "./chat.service";

@Component({
    selector:'<pm-chatApp>',
    templateUrl:'./chatApp.component.html',
    providers:[chatService,channelService]
})
export class chatComponent{
    arrChannel:Channel[]=[];
    chName:string='general';
    constructor(private cs:chatService,private chls:channelService){}
    joinChat(u:string){
        this.cs.joinUser(u);
    }

    addChannel(cn:string){
        console.log("inside add channnel"+cn)
        this.chls.addChannel(cn);
        console.log(this.getChannels())
        this.arrChannel=this.getChannels();
    }
    addUsers(u:string){

    }
    getUsers():string[]{
        return this.cs.getUsers();
    }
    getChannels():Channel[]{
        return this.chls.getChannels();
    }

    setChannel(event:any){
        this.chName=event.target.value;
        if(this.chName=="general")
        this.chls.deactivate();
        else
        {
        this.chls.makeActive();
        this.chls.setChannel(this.chName);
        }
    }
}