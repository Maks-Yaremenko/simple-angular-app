import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Other
import { AppComponent } from './app.component';
import { fakeBackendProvider } from './interceptors/fake-backend.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // TODO: Remove fakeBackendProvider when real back-end will be implemented
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
