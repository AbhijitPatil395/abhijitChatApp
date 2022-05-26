import { Component } from "@angular/core";
import { channelComponent } from "./channel.component";
import { channelService } from "./channel.service";

@Component({
    selector:'pm-login',
    templateUrl:'./login.component.html'
})
export class login
{
    userName:string='';
    
    isLoggedIn:boolean=false;
    constructor(private chls:channelService){}
    joinChat(u:string){
        if(u=='')
        alert("Please enter the name");
        else if(this.chls.checkDuplicate(u))
        alert("User already joined the chat")
        else
        {
        this.chls.joinUser(u)
        //this.chls.currentChannel='general';
        this.isLoggedIn=true;
        this.userName=u;
        }
    }
}