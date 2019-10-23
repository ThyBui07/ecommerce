import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  isAdmin: any;

  constructor(private breakpointObserver: BreakpointObserver, public authservice: AuthService) {}

}
