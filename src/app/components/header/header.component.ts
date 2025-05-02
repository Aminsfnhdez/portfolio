import { Component, HostListener, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private tema = inject(ThemeService);
  currentTheme: string = 'auto';
  activeSection: string = '';
  isMenuOpen: boolean = false;

  ngOnInit(): void{
    this.currentTheme = this.tema.getCurrentTheme();
  }

  toggleTheme(theme: 'light' | 'dark' | 'auto'){
    this.tema.setTheme(theme);
    this.currentTheme = theme;
  }

  setActive(section: string) {
    this.activeSection = section;
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectMenuItem(section: string){
    this.setActive(section);
    this.isMenuOpen = false; //close menu at select item
  }

  @HostListener('document: click', ['$event']) onClick(event: MouseEvent){
    const target = event.target as HTMLElement;
    const menu = document.getElementById('hs-navbar-header-floating');
    const toggleButton = document.getElementById('hs-navbar-header-floating-collapse');

    // close menu click item or outside menu
    if (menu && !menu.contains(target) && toggleButton && !toggleButton.contains(target)) {
      this.isMenuOpen = false;
    }
  }
}
