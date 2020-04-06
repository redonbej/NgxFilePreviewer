import { NgModule } from '@angular/core';
import { FilePreviewComponent } from './file-preview.component';
import { NgxFilePreviewerDirective } from './ngx-file-previewer.directive';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [FilePreviewComponent, NgxFilePreviewerDirective],
  imports: [
    MatIconModule
  ],
  exports: [FilePreviewComponent, NgxFilePreviewerDirective]
})
export class FilePreviewModule { }
