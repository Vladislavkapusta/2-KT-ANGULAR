import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutUserComponent } from './pages/about-user/about-user.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ResetComponent } from './pages/reset/reset.component';

export const routes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'about', component: AboutComponent},
    {path: 'about/:id', component: AboutUserComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'phone', redirectTo: 'contacts'},


    {path: 'auth', component: AuthComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'reset', component: ResetComponent},
    {path: '**', component: NotFoundComponent},
];
