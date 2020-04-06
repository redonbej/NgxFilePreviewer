import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FilePreviewModule} from '../../projects/file-preview/src/lib/file-preview.module';
import {FilePreviewComponent} from '../../projects/file-preview/src/lib/file-preview.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FilePreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
