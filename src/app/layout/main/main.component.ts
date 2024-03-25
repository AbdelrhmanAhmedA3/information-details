import { NgFor } from '@angular/common';
import { links } from './data/links.data';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InformationDetailsService } from '../../core/services';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,NgFor,RouterLink,RouterLinkActive],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  get links(){
    return links
  }
  constructor(private router: Router , public infoDetails:InformationDetailsService ) {}


}
