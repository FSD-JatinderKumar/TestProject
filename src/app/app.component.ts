import { Component } from '@angular/core';
import { ClickToCallComponent } from "./click-to-call/click-to-call.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickToCallComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'click-to-call';

}
