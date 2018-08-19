import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';

import { HttpClientModule } from '@angular/common/http';

//import { PetService } from './typescript-angular-client/api/pet.service';
import { ApiModule } from './typescript-angular-client';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [ /*PetService*/ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
