import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css']
})
export class DemoOneComponent implements OnInit, OnDestroy  {
  

  hoverColor: string = '#54a8c7'; 
  currentColor: string = '#343f52'; 
  firstHovered: boolean = false;
  secondHovered: boolean = false;
  thirdHovered: boolean = false;

//for middle section number update
randomNumber: number = 0;
incrementValue: number = 5;
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



  ngOnInit(): void {
    this.startUpdatingTagline();
    this.startGeneratingNumbers();
  }

  ngOnDestroy(): void {
    this.stopUpdatingTagline();
    this.stopGeneratingNumbers();
  }

  //for main section tagline
  taglines: string[] = ['Customer Satisfaction', 'business needs', 'creative ideas']; 
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

  showDropdownMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      const dropdown = target.closest('.dropdown');
      const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.add('show');
      }
    }
  }

  hideDropdownMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target) {
      const dropdown = target.closest('.dropdown');
      const dropdownMenu = dropdown?.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
      }
    }
  }
}
