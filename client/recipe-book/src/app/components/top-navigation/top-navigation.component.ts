import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {AuthenticationService} from '../../services/auth/authentication.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }


}
