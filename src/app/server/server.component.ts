import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .whiteColor {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {

  isVisible: Boolean = true;
  list = [];

  toggleVisible() {
    this.list.push(this.list.length + 1);
    this.isVisible = !this.isVisible;
  }

}
