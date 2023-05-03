import { Component, ViewChild } from '@angular/core';
import { DispensaryService } from 'src/app/feature/dispensary/shared/services/dispensary.service';

import { FormGroup, FormControl, Validator, ReactiveFormsModule } from '@angular/forms';
import { Dispensary } from '../shared/models/dispensary';

@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss'],
})
export class DispensaryComponent {
  display: boolean = false;
  columns: any[] = [];
  @ViewChild('dt', { static: false }) dt: any;

  // dispensary: Dispensary = {
  //   name: '',
  //   laboratory: '',
  //   expiration: '',
  //   manufacture: '',
  //   stock: 0,
  //   value: 0,
  // };

  public formDispensary = new FormGroup <Dispensary>({
    name: new FormControl('', {nonNullable: true}),
    laboratory:new FormControl('', {nonNullable: true}),
    expiration:new FormControl('', {nonNullable: true}),
    manufacture:new FormControl('', {nonNullable: true}),
    stock: new FormControl(0, {nonNullable: true}),
    value: new FormControl(0, {nonNullable: true}),
  })
  constructor(private dispensaryService: DispensaryService) {}

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Nombre' },
      { field: 'laboratory', header: 'Laboratorio' },
      { field: 'expiration', header: 'Fecha de fabricación' },
      { field: 'manufacture', header: 'Fecha de vencimiento' },
      { field: 'stock', header: 'Cantidad en stock' },
      { field: 'value', header: 'Valor unitario' },
    ];
    // this.getMedicamentos();
  }

  // dispensarys: Dispensary[] = [
  //   {
  //     name: 'medicamento 1',
  //     laboratory: 'laboratorio 1',
  //     expiration: '01/20/23',
  //     manufacture: '01/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 2',
  //     laboratory: 'laboratorio 2',
  //     expiration: '02/20/23',
  //     manufacture: '02/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 3',
  //     laboratory: 'laboratorio 3',
  //     expiration: '03/20/23',
  //     manufacture: '03/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 1',
  //     laboratory: 'laboratorio 1',
  //     expiration: '01/20/23',
  //     manufacture: '01/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 2',
  //     laboratory: 'laboratorio 2',
  //     expiration: '02/20/23',
  //     manufacture: '02/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 3',
  //     laboratory: 'laboratorio 3',
  //     expiration: '03/20/23',
  //     manufacture: '03/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 1',
  //     laboratory: 'laboratorio 1',
  //     expiration: '01/20/23',
  //     manufacture: '01/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 2',
  //     laboratory: 'laboratorio 2',
  //     expiration: '02/20/23',
  //     manufacture: '02/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 3',
  //     laboratory: 'laboratorio 3',
  //     expiration: '03/20/23',
  //     manufacture: '03/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 1',
  //     laboratory: 'laboratorio 1',
  //     expiration: '01/20/23',
  //     manufacture: '01/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 2',
  //     laboratory: 'laboratorio 2',
  //     expiration: '02/20/23',
  //     manufacture: '02/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  //   {
  //     name: 'medicamento 3',
  //     laboratory: 'laboratorio 3',
  //     expiration: '03/20/23',
  //     manufacture: '03/25/26',
  //     stock: 50,
  //     value: 1000,
  //   },
  // ];

  // getMedicamentos() {
  //   this.dispensaryService.get().subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  showDialog() {
    this.display = true;
  }

  onData() {
    console.log(this.formDispensary)
    // this.dispensarys.push(this.formDispensary)
  }

  deleteDrug(index: number) {
    // this.dispensarys.splice(index, 1);
  }
}
