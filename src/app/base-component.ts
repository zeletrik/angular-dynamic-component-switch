import { Component, Type, OnInit } from "@angular/core";
import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";
import { interval } from "rxjs";

@Component({
  selector: "base-component",
  templateUrl: "base-component.html",
  styleUrls: ["base-component.css"]
})
export class BaseComponent implements OnInit {
  index = 0;
  interval_MSEC = 3000;
  current: Type<any>;

  components: Type<any>[] = [Test1Component, Test2Component];

  ngOnInit() {
    this.current = this.components[this.index];
    interval(this.interval_MSEC).subscribe(() => this.nextComponent());
  }

  nextComponent() {
    this.index++;
    if (this.index >= this.components.length) {
      this.index = 0;
    }
    this.current = this.components[this.index];
  }
}
