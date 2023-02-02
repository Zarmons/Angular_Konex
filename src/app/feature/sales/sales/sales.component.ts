import { Component } from '@angular/core';
import { Sales } from '../shared/models/sales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  columns: any[] = [];

  ngOnInit() {
    this.columns = [
      { field: 'dateTime', header: 'Fecha y hora' },
      { field: 'name', header: 'Nombre' },
      { field: 'quantity', header: 'Cantidad' },
      { field: 'valueUnit', header: 'Valor unitario' },
      { field: 'total', header: 'Total' },
    ];
  }

  sales: Sales[] = [
    {
      dateTime: '01/28/23',
      name: 'medicamento 1',
      quantity: 10,
      valueUnit: 1000,
      total: 10000,
    },
  ]
}
