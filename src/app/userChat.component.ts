import { Component, Input } from "@angular/core";
import { Channel } from "./channel";
import { channelComponent } from "./channel.component";
import { channelService } from "./channel.service";

@Component({
    selector:'<pm-userChat>',
    templateUrl:'./userChat.component.html'
   
})
export class userChatComponent
{
    @Input() userName:string='';
    arrChannel:Channel[]=[];
    chName:string='general';
    
    constructor(private chls:channelService){}
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
    getChannels():Channel[]{
        return this.chls.getChannels();
    }
    getChannelService(){
        return this.chls;
    }
    joinChannel(ch:string){
        this.setChannel(ch);
        console.log("User:"+this.userName)
        this.chls.addUser(this.userName,this.chName);
        console.log(this.chls.getChannels());
    }
    leaveChannel(ch:string){
        console.log("leave: "+ch+","+this.userName)
        this.chls.leaveChannel(ch,this.userName)
    }
    setChannel(ch:string){
        console.log("inside set channel")
        this.chName=ch;
    }
    getCurrentChannel():string{
        console.log("in get current chanel"+this.chName)
        if(this.chName=='general')
        return "General chat"
        else
        return this.chName;
    }
}