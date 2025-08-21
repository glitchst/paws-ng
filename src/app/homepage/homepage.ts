import { Component } from '@angular/core';
import { faTwitter, faBluesky, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  public faTwitter = faTwitter;
  public faDiscord = faDiscord;
  public faBluesky = faBluesky;
}
