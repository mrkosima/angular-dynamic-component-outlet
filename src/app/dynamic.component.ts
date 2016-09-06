import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-component',
  template: `
    <span *componentOutlet="template; context: self; selector:'dynamic-component'"></span>
  `,
})
export class DynamicComponent implements OnInit {

  @Input() name: string;

  @Input() styleClass: string;

  template: string = '';

  ngOnInit() {
    this.template = `<span>Dynamic component: ${this.name}</span>`;
  }
}
