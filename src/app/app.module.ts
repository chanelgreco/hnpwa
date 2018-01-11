import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { UiModule } from './ui/ui.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent,
    StoryFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ContentModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
