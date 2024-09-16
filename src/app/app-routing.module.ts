import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { browseGuard } from './shared/services/browse.guard';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
    canActivate: [browseGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
