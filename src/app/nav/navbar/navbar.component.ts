import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [{
      id: 1,
      text: 'Home',
      href: '/home'
    },
    {
      id: 2,
      text: 'About Us',
      href: '/about-us'
    },
    {
      id: 3,
      text: 'Careers',
      href: '/careers'
    },
    {
      id: 4,
      text: 'Contact Us',
      href: '/contact'
    },
    {
      id: 5,
      text: 'Blog',
      href: '/blog'
    }
  ];

  loggedIn = false;
  loginUser() {
    this.loggedIn = true;
  }

  logOutUser() {
    this.loggedIn = false;
  }
  name  = 'Joel Raj';
  count:number = 0;

  constructor() {}

  ngOnInit(): void {}

  getName() {
    return this.loggedIn? this.name: 'User';
  }

  updateCounter(event) {
   this.count = event;
  }

}
