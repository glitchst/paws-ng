import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  imports: [
    FaIconComponent
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  public socialLinks = environment.socialLinks;
}
