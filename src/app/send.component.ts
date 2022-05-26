import { Component, Input } from "@angular/core";
import { channelService } from "./channel.service";

@Component({
    selector:'<pm-send>',
    templateUrl:'./send.component.html'
})
export class sendComponent{
    constructor(private chls:channelService){}
    @Input() UserName:string='';
    @Input() channelName:string='';
    sendMessage(msg:string)
    {
        if(msg=='')
        alert("Please enter message!!")
        else
        {
            this.chls.addMessage(msg,this.UserName,this.channelName);
        }
    }
    isSendDisabled():boolean{
        console.log(this.UserName)
        console.log(this.chls.isMember(this.UserName,this.channelName))
        if(this.chls.isActive && this.chls.isMember(this.UserName,this.channelName)==false)
        return true;
        else 
        return false;
    }
}