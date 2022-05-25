import { Component, Input } from "@angular/core";
import { channelService } from "./channel.service";
import { chatService } from "./chat.service";

@Component({
    selector:'<pm-user>',
    templateUrl:'./user.component.html'
})
export class userComponent
{
@Input() UserName:string='';
constructor(private cs:chatService,private chls:channelService){}

sendMessage(el:string)
{
    if(el=='')
    alert("Please enter message!!")
    else
    {
        if(this.chls.isActive==true)
        this.chls.addMessage(el,this.UserName);
        else
        this.cs.addMessage(el,this.UserName);
    }
}
getChannelService(){
    return this.chls;
}
joinChannel(){
    console.log("User:"+this.UserName)
    this.chls.addUser(this.UserName);
}
isSendDisabled():boolean{
    if(this.chls.isActive && this.chls.isMember(this.UserName)==false)
    return true;
    else 
    return false;
}
}