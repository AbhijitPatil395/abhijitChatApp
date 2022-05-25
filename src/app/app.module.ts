import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { channelComponent } from './channel.component';
import { chatComponent } from './chatApp.component';
import { chatDisplay } from './chatDisplay.component';
import { userComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,userComponent,chatComponent,chatDisplay,channelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
