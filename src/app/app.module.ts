import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component';
import { FifthpageComponent } from './fifthpage/fifthpage.component';
import { SixthpageComponent } from './sixthpage/sixthpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FourthpageComponent,
    FifthpageComponent,
    SixthpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
