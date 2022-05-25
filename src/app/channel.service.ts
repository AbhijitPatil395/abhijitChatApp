import { Injectable } from "@angular/core";
import { Channel } from "./channel";
import { message } from "./message";
@Injectable({
    providedIn:'root'
})
export class channelService{
    private generalch=new Channel();
    private arrChannel:Channel[]=[];
    isActive:boolean=false;
    currentChannel:string='';
    makeActive(){
        this.isActive=true;
    }
    deactivate(){
        this.isActive=false;
    }
    addChannel(c:string){
        let ch=new Channel();
        ch.name=c;
        this.arrChannel.push(ch);
    }
    addUser(name:string){
        this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrSubUsers.push(name);
       
    }
    addMessage(msg:string,uname:string){
        let m=new message();
        m.messageBody=msg;
        m.messageDate=new Date();
        m.userName=uname;
        this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrMessage.push(m);
        
    }

    getChannels():Channel[]{
        return this.arrChannel;
    }
    getChannelMessages(chname:string){
       
        return this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrMessage;
    }
    setChannel(ch:string){
        this.currentChannel=ch;
    }
    isMember(uname:string   ){
     return this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrSubUsers.find((e)=>e==uname)?true:false;
    }
    checkDuplicateChannel(ch:string){
        if(this.arrChannel.find(e=>e.name==ch))
        return true;
        else
        return false;
    }

}