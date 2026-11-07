import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { authGuard } from './guards/auth.guard';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path:'', canActivate:[authGuard],component:HomeComponent},
  {path:'about', canActivate:[authGuard],component: AboutComponent},
  {path:'contacts', canActivate:[authGuard],component: ContactComponent},
  {path:'contact/edit', canActivate:[authGuard], component: EditContactComponent},
  {path:'contacts/:id', canActivate:[authGuard],component: ContactDetailComponent},
  {path:'signin', component:SignInComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
