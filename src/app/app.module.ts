import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentOutlet, provideComponentOutletModule } from 'angular2-component-outlet';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

  ],
  declarations: [
    AppComponent,
    ComponentOutlet,
    DynamicComponent
  ],
  providers:[
    provideComponentOutletModule({
      imports: []
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
