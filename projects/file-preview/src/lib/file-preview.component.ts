import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-file-preview',
  templateUrl: 'file-preview.component.html',
  styleUrls: ['file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {

  currentFile: File = <any>{name: 'redoni.txt'};

  constructor() { }

  ngOnInit(): void {
  }

  back() {

  }

  print() {
    window.print();
  }

  download() {

  }
}
