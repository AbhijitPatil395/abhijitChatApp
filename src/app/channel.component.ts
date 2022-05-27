import { Component, Injectable, Input, OnInit } from "@angular/core";
import { channelService } from "./channel.service";
import { message } from "./message";

@Component({
    selector:'<pm-channel>',
    templateUrl:'./channel.component.html'
})
export class channelComponent{
    constructor(private chls:channelService){}
    @Input() channelName:string='';
    @Input() userName:string='';
    
    getMessages():message[]|undefined
    {
        console.log("in channel compo: "+this.channelName)
        //console.log("in channel compo service: "+this.chls.currentChannel)

        if(this.chls.isMember(this.userName,this.channelName))
        {
            console.log("inside if")
        return  this.chls.getChannelMessages(this.channelName);
        }
     else
     return undefined;
    }
}