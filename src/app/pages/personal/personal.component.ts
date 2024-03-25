import { Router } from '@angular/router';
import { InformationDetailsService } from './../../core/services/information-details/information-details.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconComponent } from 'angular-svg-icon';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [SvgIconComponent,HttpClientModule,HeadingComponent,MatFormFieldModule,
            MatInputModule, FormsModule, MatButtonModule, MatIconModule,ReactiveFormsModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent {

constructor(public infoDetails:InformationDetailsService, public router :Router){}

  nextPage(){
    console.log(this.infoDetails.perantForm.value);

    if (this.infoDetails.perantForm.invalid) {
      this.infoDetails.perantForm.markAllAsTouched()
    } else {
      this.router.navigate(['/home/select']);
    }

  }
}
