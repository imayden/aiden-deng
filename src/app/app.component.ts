import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'aiden-deng';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (this.isBrowser()) {
      this.updateTheme();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateTheme);
    }
  }

  updateTheme = () => {
    if (this.isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
