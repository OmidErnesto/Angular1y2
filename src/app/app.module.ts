import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';


import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hello', component: HelloWorldComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
