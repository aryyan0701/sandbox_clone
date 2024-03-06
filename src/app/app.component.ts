import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate('500ms ease-in-out')),
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
    this.startUpdatingTagline();
    this.startGeneratingNumbers();
  }

  ngOnDestroy(): void {
    this.stopUpdatingTagline();
    this.stopGeneratingNumbers();
  }

  //for main section tagline
  taglines: string[] = ['Your Portfolio.', 'Your Startups.', 'Your Business.', 'Digital marketing.']; 
  currentTagline: string = ''; 
  intervalSubscription_fortagline: Subscription = new Subscription();

  startUpdatingTagline(): void {
    this.intervalSubscription = interval(2000).subscribe(() => {
      const randomIndex = Math.floor(Math.random() * this.taglines.length);
      this.currentTagline = this.taglines[randomIndex];
    });
  }

  stopUpdatingTagline(): void {
    this.intervalSubscription.unsubscribe();
  }



//for middle section number update
  randomNumber: number = 0;
  incrementValue: number = 3;
  intervalSubscription: Subscription = new Subscription()

  startGeneratingNumbers(): void {
    this.intervalSubscription = interval(100).subscribe(() => {
     
      this.randomNumber += this.incrementValue;

      if (this.randomNumber >= 100) {

        this.stopGeneratingNumbers();
        
        this.randomNumber = 0;

        setTimeout(() => {
          this.startGeneratingNumbers();
        }, 200); 
      }
    });
  }

  stopGeneratingNumbers(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
