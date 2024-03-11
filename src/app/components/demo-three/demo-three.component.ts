import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-three.component.html',
  styleUrls: ['./demo-three.component.css']
})
export class DemoThreeComponent implements OnInit, OnDestroy  {
  intervalSubscription: Subscription = new Subscription;


  ngOnInit(): void {
    this.startUpdatingTagline();
  }

  ngOnDestroy(): void {
    this.stopUpdatingTagline();
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
