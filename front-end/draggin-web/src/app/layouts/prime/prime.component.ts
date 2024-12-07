import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SidemenuComponent } from "../../ui-components/sidemenu/sidemenu.component";

@Component({
  selector: 'app-prime',
  standalone: true,
  imports: [
    CommonModule,
    SidemenuComponent
],
  templateUrl: './prime.component.html',
  styleUrl: './prime.component.scss'
})
export class PrimeComponent {
  isMenuOpened = true;
  menuWidth = 250; // Initial width of the menu
  isDragging = false;
  startX = 0;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.menuWidth = this.isMenuOpened ? 250 : 0;
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
  }

  onDragStart(event: MouseEvent): void {
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.startX;
    this.menuWidth = Math.max(0, this.menuWidth + deltaX);
    this.startX = event.clientX;
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
    if (this.menuWidth < 100) {
      this.isMenuOpened = false;
      this.menuWidth = 0;
    } else {
      this.isMenuOpened = true;
    }
  }
}
