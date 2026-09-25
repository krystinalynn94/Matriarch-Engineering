import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import {AboutME} from './about-me/about-me';
import {Contact} from './contact/contact';

export const routes: Routes = [
  { path: '', 
    component: Home 
  },
  { path: 'portfolio', 
    component: Portfolio 
  },
  { path: 'about-me',
    component: AboutME
  },
  { path: 'contact',
    component: Contact
  }
];
