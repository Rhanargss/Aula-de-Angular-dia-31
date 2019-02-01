import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hero-project';
  hero ='Iron Man';

  ngOnInit(){
  	console.log("This is mu hero:" + this.hero);
  }
}
