import { Component } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent {
  title: string = 'Thank You!';
  subTitle:string  = 'Thaks Form Information Your Subscription we hobe yuo have fun using our platform';
}
