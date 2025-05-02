import { Component, inject } from '@angular/core';
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

  ngOnInit(): void{
    this.currentTheme = this.tema.getCurrentTheme();
  }

  toggleTheme(theme: 'light' | 'dark' | 'auto'){
    this.tema.setTheme(theme);
    this.currentTheme = theme;
  }
}
