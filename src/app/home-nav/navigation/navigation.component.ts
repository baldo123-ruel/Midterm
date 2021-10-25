import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  name = 'Ruel Baldo';
  home = 'HOME';
  profile = 'PROFILE';
  contact = 'CONTACT';
  gallery = 'GALLERY';
  constructor() { }

  ngOnInit(): void {
  }

}
