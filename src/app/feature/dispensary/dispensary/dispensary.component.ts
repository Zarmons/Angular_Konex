import { Component, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validator, ReactiveFormsModule } from '@angular/forms';
import { Dispensary } from '../shared/models/dispensary';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss'],
  providers: [MessageService]
})
export class DispensaryComponent {

  columns: any[] = [];
  display: boolean = false;
  dispensarys: Dispensary[] = [];

  data: any = ""

  @ViewChild('dt', { static: false }) dt: any;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Nombre' },
      { field: 'laboratory', header: 'Laboratorio' },
      { field: 'expiration', header: 'Fecha de fabricación' },
      { field: 'manufacture', header: 'Fecha de vencimiento' },
      { field: 'stock', header: 'Cantidad en stock' },
      { field: 'value', header: 'Valor unitario' },
    ];
  }

  public DispensaryForm = new FormGroup <Dispensary>({
    name: new FormControl('', {nonNullable: true}),
    laboratory:new FormControl('', {nonNullable: true}),
    expiration:new FormControl('', {nonNullable: true}),
    manufacture:new FormControl('', {nonNullable: true}),
    stock: new FormControl(0, {nonNullable: true}),
    value: new FormControl(0, {nonNullable: true}),
  })

  showDialog() {
    this.display = true;
  }

  onData() {
    this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'Medicamento agregado al dispensario' });
    this.display = false;
    console.log(this.DispensaryForm.value)
    this.data = this.DispensaryForm.value
    this.dispensarys.push(this.data)
    this.DispensaryForm.reset()
    console.log('-->', this.dispensarys );
  }

  deleteDrug(index: number) {
    console.log('-->', index );
    this.dispensarys.splice(index, 1);
    this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Medicamento Eliminado del dispensario' });
  }
}
