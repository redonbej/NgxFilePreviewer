import {
  AfterViewInit,
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef,
  Directive, EmbeddedViewRef,
  HostBinding,
  HostListener, Injector,
  OnDestroy,
  OnInit
} from '@angular/core';
import {FilePreviewComponent} from './file-preview.component';

@Directive({
  selector: '[ngxNgxFilePreviewer]'
})
export class NgxFilePreviewerDirective implements OnInit, OnDestroy{

  componentRef: ComponentRef<FilePreviewComponent>;
  domElement: HTMLElement;

  constructor(private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) { }

  ngOnInit(): void {
    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(FilePreviewComponent).create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);

    this.domElement = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    document.body.appendChild(this.domElement);
  }

  ngOnDestroy(): void {
    this.appRef.detachView(this.componentRef.hostView);
    document.body.removeChild(this.domElement);
  }

  @HostListener('click', ['$event']) click(event: MouseEvent) {

  }


}
