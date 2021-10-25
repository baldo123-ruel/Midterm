import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './home-nav/navigation/navigation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
