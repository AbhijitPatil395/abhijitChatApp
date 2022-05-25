import { Component } from "@angular/core";
import { chatService } from "./chat.service";
import { message } from "./message";

@Component({
    selector:'<pm-chatDisplay>',
    templateUrl:'./chatDisplay.component.html'
})
export class chatDisplay{
    constructor(private cs:chatService){}

    getMessages():message[]{
       return this.cs.getMessages();
    }

}