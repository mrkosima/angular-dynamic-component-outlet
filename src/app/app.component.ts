import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Dynamic component outlet</h1>
    <div style="margin-bottom: 5px;">
      <button (click)="addComponent()">Add dynamic component</button>
    </div>
    <div *ngFor="let name of names">
      <p>
        <span>Component {{name}}:</span>
        <span>
          <dynamic-component name='{{name}}'></dynamic-component>
        </span>
      </p>
    </div>
  `
})
export class AppComponent {

  public names = [];

  private id = 0;

  addComponent(){
    this.names.push(`name_${++this.id}`);
  }
}