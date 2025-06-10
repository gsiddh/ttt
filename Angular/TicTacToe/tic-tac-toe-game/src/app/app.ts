import { Component } from '@angular/core';
import { BoardComponent } from './board.component'; // Import BoardComponent

@Component({
  selector: 'app-root',
  standalone: true, // Make it standalone
  imports: [BoardComponent], // Import BoardComponent here
  templateUrl: './app.component.html', // Ensure this points to the correct HTML file
  // styles: [], // Assuming app.component.css or inline styles if any
})
export class App {
  protected title = 'tic-tac-toe-game';
}
