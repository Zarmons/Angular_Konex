import { Component, ViewChild } from '@angular/core';

import { FormGroup, FormControl, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
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
  DispensaryForm! : FormGroup;

  data: any = ""

  @ViewChild('dt', { static: false }) dt: any;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Nombre del Medicamento' },
      { field: 'laboratory', header: 'Laboratorio' },
      { field: 'expiration', header: 'Fecha de Fabricación' },
      { field: 'manufacture', header: 'Fecha de Vencimiento' },
      { field: 'stock', header: 'Cantidad en Stock' },
      { field: 'value', header: 'Valor Unitario' },
    ];
    this.DispensaryForm = new FormGroup <Dispensary>({
      name: new FormControl('', {nonNullable: true}),
      laboratory:new FormControl('', {nonNullable: true}),
      expiration:new FormControl('', {nonNullable: true}),
      manufacture:new FormControl('', {nonNullable: true}),
      stock: new FormControl(0, {nonNullable: true}),
      value: new FormControl(0, {nonNullable: true}),
    })
  }


  showDialog() {
    this.display = true;
  }

  createDrug() {
    this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'El medicamento fue agregado con éxito' });
    this.display = false;
    console.log(this.DispensaryForm.value)
    this.data = this.DispensaryForm.value
    this.dispensarys.push(this.data)
    this.DispensaryForm.reset()
    console.log('-->', this.dispensarys );
  }

  deleteDrug() {
    let index = this.dispensarys.findIndex(x => x.name)
    this.dispensarys.splice(index, 1);
    this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'El medicamento fue eliminado con éxito' });
  }

  editDrug() {
  }
}
