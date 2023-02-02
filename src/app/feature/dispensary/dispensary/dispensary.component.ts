import { Component, ViewChild } from '@angular/core';
import { DispensaryService } from 'src/app/feature/dispensary/shared/services/dispensary.service';
import { Dispensary } from '../shared/models/dispensary';

@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss'],
})
export class DispensaryComponent {
  display: boolean = false;
  columns: any[] = [];
  loading: boolean = true;
  @ViewChild('dt', { static: false }) dt: any;

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
    this.loading = false;
    console.log(this.dispensarys.values)
    // this.getMedicamentos();
  }

  dispensarys: Dispensary[] = [
    {
      name: 'medicamento 1',
      laboratory: 'laboratorio 1',
      expiration: '01/20/23',
      manufacture: '01/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 2',
      laboratory: 'laboratorio 2',
      expiration: '02/20/23',
      manufacture: '02/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 3',
      laboratory: 'laboratorio 3',
      expiration: '03/20/23',
      manufacture: '03/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 1',
      laboratory: 'laboratorio 1',
      expiration: '01/20/23',
      manufacture: '01/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 2',
      laboratory: 'laboratorio 2',
      expiration: '02/20/23',
      manufacture: '02/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 3',
      laboratory: 'laboratorio 3',
      expiration: '03/20/23',
      manufacture: '03/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 1',
      laboratory: 'laboratorio 1',
      expiration: '01/20/23',
      manufacture: '01/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 2',
      laboratory: 'laboratorio 2',
      expiration: '02/20/23',
      manufacture: '02/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 3',
      laboratory: 'laboratorio 3',
      expiration: '03/20/23',
      manufacture: '03/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 1',
      laboratory: 'laboratorio 1',
      expiration: '01/20/23',
      manufacture: '01/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 2',
      laboratory: 'laboratorio 2',
      expiration: '02/20/23',
      manufacture: '02/25/26',
      stock: 50,
      value: 1000,
    },
    {
      name: 'medicamento 3',
      laboratory: 'laboratorio 3',
      expiration: '03/20/23',
      manufacture: '03/25/26',
      stock: 50,
      value: 1000,
    },
  ];

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
    // console.log(this.data)
  }

  deleteDrug(index: number) {
    this.dispensarys.splice(index, 1)
  }
}
