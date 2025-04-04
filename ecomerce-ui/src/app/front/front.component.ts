import {Component, inject} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {ProductsComponent} from './components/products/products.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {Router, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-front',
  imports: [HeaderComponent, ProductsComponent, ContactComponent, FooterComponent, RouterOutlet],
  templateUrl: './front.component.html',
  standalone: true,
  styleUrl: './front.component.css'
})
export class FrontComponent {
  router=inject(Router);
  isFrontPage(): boolean {
    return this.router.url === '/front';
  }

}
