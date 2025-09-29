import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxCalendarModule } from 'devextreme-angular/ui/calendar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DxCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
