import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { InformationDetailsService } from '../../core/services/information-details/information-details.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [HeadingComponent,SvgIconComponent,NgClass,MatButton,ReactiveFormsModule,MatError],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.scss'
})
export class AddOnsComponent {
  title: string = 'Pick add-ons';
  subTitle:string  = 'Add-ons help enhance your gaming experience.';
  checkedOne!: Boolean ;
  checkedTwo!: Boolean ;
  checkedTree!: Boolean ;

constructor(public infoDetails:InformationDetailsService, public router :Router){}
  nextPage(){
    this.router.navigate(['/home/summary']);
  }

  prevPage() {
    this.router.navigate(['/home/select']);
  }

  onChange(event: any): void {
    if (event.target.id === 'arcade') {
      this.checkedOne  = event.target['checked'];

    } else if (event.target.id === 'advanced'){

      this.checkedTwo  = event.target['checked'];
    }else if (event.target.id === 'pro'){
      this.checkedTree  = event.target['checked'];
    }


   }
}
