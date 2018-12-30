import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatTooltipModule } from '@angular/material';
import { GuessComponent } from './guess/guess.component';
import { MainComponent } from './main/main.component';
import { SelectComponent } from './select/select.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessComponent,
    MainComponent,
    SelectComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
