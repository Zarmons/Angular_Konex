import { Component } from '@angular/core';

@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss']
})
export class DispensaryComponent {

    display: boolean = false;

    showDialog() {
        this.display = true;
    }
}
