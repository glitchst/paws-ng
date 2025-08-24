import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../../environments/environment';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  public socialLinks = environment.socialLinks;

  constructor(private router: Router) {}

  public async navigateToGallery(): Promise<boolean> {
    return await this.router.navigate(['gallery']);
  }
}
