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
        console.log("current:"+this.currentChannel);
        console.log(this.arrChannel.find((elem)=>elem.name==this.currentChannel));
        this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrSubUsers.push(name);
        console.log(this.arrChannel.find((elem)=>elem.name==this.currentChannel));
    }
    addMessage(msg:string,uname:string){
        let m=new message();
        m.messageBody=msg;
        m.messageDate=new Date();
        m.userName=uname;
        console.log(m);
        this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrMessage.push(m);
        console.log(this.arrChannel.find((elem)=>elem.name==this.currentChannel))
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

}