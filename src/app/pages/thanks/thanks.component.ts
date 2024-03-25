import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { InformationDetailsService } from '../../core/services';
@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [HeadingComponent,SvgIconComponent],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  title= "Thank You!";
  subTitle = `Thank you for your interest!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
  , eveniet iure inventore quisquam consequuntur deserunt quas officiis maiores possimus enim.

  `;

  constructor(public infoDetails:InformationDetailsService){
    this.infoDetails.perantForm.disable();
  }

}
