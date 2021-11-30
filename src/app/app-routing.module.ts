import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
