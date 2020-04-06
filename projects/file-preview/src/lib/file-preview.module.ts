import { NgModule } from '@angular/core';
import { FilePreviewComponent } from './file-preview.component';
import { NgxFilePreviewerDirective } from './ngx-file-previewer.directive';



@NgModule({
  declarations: [FilePreviewComponent, NgxFilePreviewerDirective],
  imports: [
  ],
  exports: [FilePreviewComponent, NgxFilePreviewerDirective]
})
export class FilePreviewModule { }
