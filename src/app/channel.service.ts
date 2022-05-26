import { Injectable } from "@angular/core";
import { Channel } from "./channel";
import { message } from "./message";
@Injectable({
    providedIn:'root'
})
export class channelService{
    private generalch=new Channel();
    arrUsers:string[]=[];
    private arrChannel:Channel[]=[{name:'general',arrMessage:[],arrSubUsers:[]}];
    isActive:boolean=true;
    //currentChannel:string='general';
    joinUser(u:string){
        this.arrUsers.push(u);
    }
    checkDuplicate(u:string):boolean{
        if(this.arrUsers.find((e)=>e==u))
        return true;
        else 
        return false;
    }
    getUsers():string[]{
        return this.arrUsers;
    }
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
    addUser(name:string,ch:string){
        //this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrSubUsers.push(name);
        this.arrChannel.find((elem)=>elem.name==ch)?.arrSubUsers.push(name);
       
    }
    leaveChannel(ch:string,user:string){
        console.log(this.arrChannel)
        let arr=this.arrChannel.find((elem)=>elem.name==ch);
        arr!.arrSubUsers=arr!.arrSubUsers.filter(elem=>elem!=user);
        console.log(this.arrChannel)
    }
    addMessage(msg:string,uname:string,ch:string){
        let m=new message();
        m.messageBody=msg;
        m.messageDate=new Date();
        m.userName=uname;
        console.log("channel service add:"+ch)
       // this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrMessage.push(m);
       this.arrChannel.find((elem)=>elem.name==ch)?.arrMessage.push(m);
    }

    getChannels():Channel[]{
        return this.arrChannel;
    }
    getChannelMessages(chname:string){
       
        //return this.arrChannel.find((elem)=>elem.name==this.currentChannel)?.arrMessage;
        return this.arrChannel.find((elem)=>elem.name==chname)?.arrMessage;
    }
    // setChannel(ch:string){
    //     this.currentChannel=ch;
    // }
    isMember(uname:string ,ch:string  )
    {
        if(ch=='general')
        return true;
        else
     return this.arrChannel.find((elem)=>elem.name==ch)?.arrSubUsers.find((e)=>e==uname)?true:false;
    }
    isLeavable(uname:string ,ch:string  )
    {
        if(ch=='general')
        return false;
        else
     return this.arrChannel.find((elem)=>elem.name==ch)?.arrSubUsers.find((e)=>e==uname)?true:false;
    }
    checkDuplicateChannel(ch:string){
        if(this.arrChannel.find(e=>e.name==ch))
        return true;
        else
        return false;
    }

}