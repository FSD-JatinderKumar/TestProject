import { Component } from '@angular/core';
import { ClickToCallComponent } from "./click-to-call/click-to-call.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { JournalhomeComponent } from './JournalWeb/journalhome/journalhome.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, JournalhomeComponent,ClickToCallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Journal ';

}
