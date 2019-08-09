import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; 
import { ReactiveFormsModule } from "@angular/forms"; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNameComponent } from './components/list-name/list-name.component';
import { ProfileSubmitComponent } from './components/profile-submit/profile-submit.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProfileSubmitReactiveComponent } from './components/profile-submit-reactive/profile-submit-reactive.component';
import { ProfileReactiveFormComponent } from './components/profile-reactive-form/profile-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNameComponent,
    ProfileSubmitComponent,
    ProfileFormComponent,
    ProfileSubmitReactiveComponent,
    ProfileReactiveFormComponent,
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
