import { Component } from '@angular/core';
import { DispensaryService } from 'src/app/feature/dispensary/shared/services/dispensary.service';
@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss'],
})
export class DispensaryComponent {
  display: boolean = false;

  data = {
    name: '',
    laboratory: '',
    manufacture: '',
    expiration: '',
    quantity: '',
    value: '',
  };

  constructor(private dispensaryService: DispensaryService) {}

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {
    this.getMedicamentos();
  }

  getMedicamentos() {
    // this.dispensaryService.get().subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  onData() {
    console.log(this.data)
  }
}
