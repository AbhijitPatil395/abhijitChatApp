import { Injectable } from "@angular/core";
import { message } from "./message";
@Injectable({
    providedIn:'root'
})
export class chatService{
    arrMessage:message[]=[];
    arrUsers:string[]=[];
    addMessage(msg:string,username:string)
    {
        let m=new message();
        m.messageDate=new Date();
        m.messageBody=msg;
        m.userName=username;
        this.arrMessage.push(m);
    }
    getMessages():message[]{
        return this.arrMessage;
    }
    joinUser(u:string){
        this.arrUsers.push(u);
    }
    getUsers():string[]{
        return this.arrUsers;
    }
    isMember():boolean{
        return true;
    }

}