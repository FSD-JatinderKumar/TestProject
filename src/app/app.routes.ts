import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ClickToCallComponent } from './click-to-call/click-to-call.component';

export const routes: Routes = [

    {
        path:"",
        component:ClickToCallComponent

    },
];
