import {
  Directive,
  Type,
  ViewContainerRef,
  Input,
  ComponentFactoryResolver,
  OnChanges
} from "@angular/core";

@Directive({
  selector: "[dynamic-comp]"
})
export class DynamicComponentDirective implements OnChanges {
  
  @Input("comp") comp: Type<any>;
  constructor(
    public viewContainerRef: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges() {
    Promise.resolve().then(() => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.comp
      );
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory);
    });
  }
}
