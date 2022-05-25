import { Component, Input } from "@angular/core";
import { channelService } from "./channel.service";
import { chatService } from "./chat.service";
import { message } from "./message";

@Component({
    selector:'<pm-channel>',
    templateUrl:'./channel.component.html'
})
export class channelComponent{
    constructor(private chls:channelService,private cs:chatService){}
    @Input() channelName:string='';
    getMessages():message[]|undefined{
        if(this.chls.isActive)
      return  this.chls.getChannelMessages(this.channelName);
      else
      return this.cs.getMessages();
    }
}