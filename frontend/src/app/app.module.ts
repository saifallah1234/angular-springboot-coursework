import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { BaseUrl } from './shared/base-url';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    CommentComponent,
    ContactDetailComponent,
    SignInComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: 'BaseUrl', useValue: BaseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
