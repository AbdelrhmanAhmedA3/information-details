import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InformationDetailsService {

  perantForm:FormGroup = new FormGroup({

      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,Validators.email,
        Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
      phone: new FormControl(null,[Validators.required]),



    plan: new FormControl('',),
    togglePlan: new FormControl(false),



    arcade: new FormControl(null),
    advanced: new FormControl(null),
    pro: new FormControl(null),
})




//   personal:FormGroup = new FormGroup({
//       name: new FormControl(null, [Validators.required]),
//       email: new FormControl(null, [Validators.required,Validators.email,
//         Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
//       phone: new FormControl(null,[Validators.required]),
//   })

//   selectPlan:FormGroup = new FormGroup({
//     plan: new FormControl('',[Validators.required]),
//     togglePlan: new FormControl(false)
//    })

//    addOns:FormGroup = new FormGroup({
//     arcade: new FormControl(null),
//     advanced: new FormControl(null),
//     pro: new FormControl(null),
// })
}
