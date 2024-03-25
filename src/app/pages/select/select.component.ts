import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {  NgClass, NgIf } from '@angular/common';
import { MatError } from '@angular/material/form-field';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { Router } from '@angular/router';
import { InformationDetailsService } from '../../core/services/information-details/information-details.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgClass,HeadingComponent,NgIf,
    MatError,MatButtonModule,SvgIconComponent,MatSlideToggleModule,ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',

})
export class SelectComponent {
  title: string = 'Select Your plan';
  subTitle:string  = 'You have the option monthly or yearly billing.';

 constructor(public infoDetails:InformationDetailsService, public router :Router){}

 nextPage(){
  console.log(this.infoDetails.perantForm.controls['togglePlan'].value);
  console.log(this.infoDetails.perantForm.controls['plan'].value);
  if (this.infoDetails.perantForm.invalid) {
    this.infoDetails.perantForm.markAllAsTouched()
  } else {
    this.router.navigate(['/home/add-ons']);
  }

 }

 prevPage() {
  this.router.navigate(['/home/personal']);
}


}
