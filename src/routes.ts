import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGuard } from './app/services/authentication-guard.service';

export const appRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
  {path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo: '/gallery', pathMatch: 'full'}
]
