import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

// Services
import { UploadService} from './services/upload.service';
import { AuthenticationGuard } from './services/authentication-guard.service';
import { ImageService} from './services/image.service';
import { AuthenticationService} from './services/authentication.service';

// Material modules
import {MatProgressBarModule, MatInputModule, MatCardModule, MatButtonModule} from '@angular/material'

// Routes
import { appRoutes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AuthenticationGuard,
    AuthenticationService,
    ImageService,
    UploadService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
