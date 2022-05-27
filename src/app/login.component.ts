import { Component, EventEmitter, Input, Output } from "@angular/core";
import { channelComponent } from "./channel.component";
import { channelService } from "./channel.service";

@Component({
    selector:'pm-login',
    templateUrl:'./login.component.html'
})
export class login
{
    userName:string='';
    @Output() loginStatus: EventEmitter<{status:boolean,user:string}> = new EventEmitter();
    @Input() isLoggedIn:boolean=false;
    
    constructor(private chls:channelService){}

    joinChat(u:string){
        if(u=='')
        alert("Please enter the name");
        else if(this.chls.checkDuplicate(u))
        alert("User already joined the chat")
        else
        {
        this.chls.joinUser(u)
        this.isLoggedIn=true;
        this.loginStatus.emit({status:this.isLoggedIn,user:u});
        this.userName=u;
        }
    }
}