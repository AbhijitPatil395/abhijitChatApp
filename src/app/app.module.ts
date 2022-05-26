import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { channelComponent } from './channel.component';
import { chatComponent } from './chatApp.component';

import { sendComponent } from './send.component';
import { userChatComponent } from './userChat.component';

@NgModule({
  declarations: [
    AppComponent,chatComponent,channelComponent,userChatComponent,sendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
