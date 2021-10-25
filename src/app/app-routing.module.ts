import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './home-nav/navigation/navigation.component';
import { ProfileComponent } from './pages/profile/profile.component';
const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
