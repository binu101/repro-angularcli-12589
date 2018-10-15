import { Component } from '@angular/core';

import * as fromFooBar from '../foo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = fromFooBar.renameThisPlease;
}
