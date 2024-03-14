import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit, OnDestroy  {
  showContent: boolean = true;
  
  constructor(private router: Router) {}

  navigateToDemo_one(){
    this.router.navigate(['/demo-one']);
  }
 
  ngOnInit(): void {
    this.startUpdatingTagline();
    this.startGeneratingNumbers();

    //router content condition
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showContent = !['/demo-three'].includes(event.url);
      }
    });
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

