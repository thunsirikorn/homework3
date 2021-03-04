import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { MatTreeModule } from '@angular/material/tree';
import { AppRoutingModule } from './app-routing.module'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserSettingComponent,
    WorkspaceComponent

  ],
  imports: [
    BrowserModule,
    MatTreeModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
