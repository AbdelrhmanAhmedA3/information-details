import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { InformationDetailsService } from '../../core/services';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [HeadingComponent,RouterLink,MatButtonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  title: string = 'Finishing up';
  subTitle:string  = 'Double-check everything looks ok before confirming.';

  constructor(public infoDetails:InformationDetailsService,public router:Router){}

  nextPage(){
    this.router.navigateByUrl('/home/thank-you');
  }

}
