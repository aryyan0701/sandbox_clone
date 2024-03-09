import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-three',
  templateUrl: './demo-three.component.html',
  styleUrls: ['./demo-three.component.css']
})
export class DemoThreeComponent {

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
