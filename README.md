# Dynamic component change example #

## Demo application for Angular Component change ##

## Use case ##

This example shows an implementation of dynamic component change with a directive.

## DynamicComponentDirective ##

Has an input which contains the component to display.
If the component changes in the parent the new component will be shown.

```javascript
Promise.resolve().then(() => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.comp
      );
      this.viewContainerRef.clear();
      this.viewContainerRef.createComponent(componentFactory);
    });
```

## BaseComponent ##

Useses `rxjs`to implement the counter with a pre-defined interval

```javascript
interval(this.interval_MSEC).subscribe(() => this.nextComponent());
```
