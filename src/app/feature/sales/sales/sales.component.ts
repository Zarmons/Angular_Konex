import { Component } from '@angular/core';
import { Sales } from '../shared/models/sales';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  columns: any[] = [];
  sales: Sales[] = [];
  messages: Message[] = [];

  ngOnInit() {
    this.columns = [
      { field: 'dateTime', header: 'Fecha y hora' },
      { field: 'name', header: 'Nombre' },
      { field: 'quantity', header: 'Cantidad' },
      { field: 'valueUnit', header: 'Valor unitario' },
      { field: 'total', header: 'Total' },
    ];
    this.messages = [
      { severity: 'info', summary: '', detail: 'Haga clic en el botón consultar para cargar toda la información' },
    ];
  }

  view () {
    const storedReportFavorite = window.localStorage.getItem('sell')
    if (storedReportFavorite) {
    this.sales =JSON.parse(storedReportFavorite);
    }
  }

}
