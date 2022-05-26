import { Component } from "@angular/core";
import { Channel } from "./channel";
import { channelService } from "./channel.service";
import { stateService } from "./state.service";


@Component({
    selector:'<pm-chatApp>',
    templateUrl:'./chatApp.component.html',
    providers:[stateService]
})
export class chatComponent{
    userName:string='';
    arrChannel:Channel[]=[];
    chName:string='general';
    isLoggedIn:boolean=false;
    constructor(private chls:channelService,private ss:stateService){}
    joinChat(u:string){
        if(u=='')
        alert("Please enter the name");
        else if(this.chls.checkDuplicate(u))
        alert("User already joined the chat")
        else
        {
        this.chls.joinUser(u);
        this.isLoggedIn=true;
        this.userName=u;
        this.ss.currentChannel='general';
        this.ss.userName=u;
        }

    }

    addChannel(cn:string){
        if(cn=='')
        alert("Please enter the channel name");
        else if(this.chls.checkDuplicateChannel(cn))
        alert("Channel already exists with same name")
        else{
            this.chls.addChannel(cn);
            console.log(this.getChannels())
            this.arrChannel=this.getChannels();
        }
    }
    addUsers(u:string){

    }
    getUsers():string[]{
        return this.chls.getUsers();
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
        //this.chls.setChannel(this.chName);
        }
    }
}