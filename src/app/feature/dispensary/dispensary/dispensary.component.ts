import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dispensary, Sales, } from '../shared/models/dispensary';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.scss'],
  providers: [MessageService]
})
export class DispensaryComponent {

  columns: any[] = [];
  displayCreate: boolean = false;
  displaySell: boolean = false;
  displayValidateCreate: boolean = false;
  displayValidateSell: boolean = false;
  dispensarys: Dispensary[] = [];
  sales: Sales[] = [];
  messages: Message[] = [];
  DispensaryForm! : FormGroup;
  SalesForm! : FormGroup;
  searchValue: string | undefined;
  titleModel: string = '';
  titleDialog: string = '';
  message : string = '';
  value: number = 0;
  stock: number = 0;
  name: string = '';
  data: any = "";
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

    this.messages = [
      { severity: 'info', summary: '', detail: 'Haga clic en el botón consultar para cargar toda la información' },
  ];

    this.DispensaryForm = new FormGroup <Dispensary>({
      name: new FormControl('', {nonNullable: true}),
      laboratory:new FormControl('', {nonNullable: true}),
      expiration:new FormControl('', {nonNullable: true}),
      manufacture:new FormControl('', {nonNullable: true}),
      stock: new FormControl(0, {nonNullable: true}),
      value: new FormControl(0, {nonNullable: true}),
    });

    this.SalesForm = new FormGroup <Sales>({
      dateTime: new FormControl ('', {nonNullable: true}),
      name: new FormControl ('', {nonNullable: true}),
      quantity: new FormControl(0 , {nonNullable: true}),
      valueUnit: new FormControl (0 , {nonNullable: true}),
      total: new FormControl (0 , {nonNullable: true}),
    })
  }

  // método para validar el modal a trabajar
  showModalCreateEdit(info: any) {
    if(info == null){
      this.DispensaryForm.reset();
      this.displayCreate = true;
      this.titleModel = 'Crear';
    } else {
      this.displayCreate = true;
      this.titleModel = 'Editar';
      this.viewData(info);
    }
  }
  // método para abrir dialogo
  showDialogCreateEdit() {
    this.displayValidateCreate = true;
    if (this.titleModel === 'Crear') {
      this.titleDialog = 'Guardar';
      this.message = '¿Está seguro de que desea guardar?';
    } else {
      this.titleDialog = 'Editar';
      this.message = '¿Está seguro de que desea actualizar?';
    }
  }

  // método para validar si se agrega o se actualiza
  createOrEdit () {
    if (this.titleModel === 'Crear') this.createDrug()
    else this.updateDrug()
  }

  // método para agregar medicamentos a dispensario
  createDrug() {
    this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'El medicamento fue agregado con éxito' });
    this.displayCreate = false;
    this.displayValidateCreate = false;
    this.data = this.DispensaryForm.value;
    this.DispensaryForm.value.expiration = new Date().toLocaleDateString(this.DispensaryForm.value.expiration);
    this.DispensaryForm.value.manufacture = new Date().toLocaleDateString(this.DispensaryForm.value.manufacture);
    this.dispensarys.push(this.data);
    localStorage.setItem("Dispensario",JSON.stringify(this.dispensarys));
    this.DispensaryForm.reset();
    // table.clear();
    // this.searchValue = ''
  }

  // método para consultar
  view() {
    const storedReportFavorite = window.localStorage.getItem('Dispensario')
    if (storedReportFavorite) {
      this.dispensarys = JSON.parse(storedReportFavorite);
    }
  }

  // método para visualizar la información para actualizar
  viewData(data: any) {
    this.DispensaryForm.get('name')?.setValue(data ? data.name : null);
    this.DispensaryForm.get('laboratory')?.setValue(data ? data.laboratory : null);
    this.DispensaryForm.get('expiration')?.setValue(data ? data.expiration : null);
    this.DispensaryForm.get('manufacture')?.setValue(data ? data.manufacture : null);
    this.DispensaryForm.get('stock')?.setValue(data ? data.stock : null);
    this.DispensaryForm.get('value')?.setValue(data ? data.value : null);
  }

  // método para actualizar
  updateDrug () {
    this.data = this.DispensaryForm.value
    let index = this.dispensarys.findIndex(dispensarys => dispensarys.name === this.data.name )
    this.dispensarys.splice(index, 1, this.data)
    // this.DispensaryForm.value.expiration = new Date().toLocaleDateString(this.DispensaryForm.value.expiration);
    // this.DispensaryForm.value.manufacture = new Date().toLocaleDateString(this.DispensaryForm.value.manufacture);
    localStorage.setItem("Dispensario", JSON.stringify(this.dispensarys))
    this.DispensaryForm.reset()
    this.displayCreate = false;
    this.displayValidateCreate = false;

  }

  // métodos para vender
  showDialogSell(data: any) {
    this.displaySell = true;
    this.value = data.value;
    this.name = data.name;
    this.stock = data.stock;
    this.DispensaryForm.get('name')?.setValue(data ? data.name : null);
    this.DispensaryForm.get('laboratory')?.setValue(data ? data.laboratory : null);
    this.DispensaryForm.get('expiration')?.setValue(data ? data.expiration : null);
    this.DispensaryForm.get('manufacture')?.setValue(data ? data.manufacture : null);
    this.DispensaryForm.get('stock')?.setValue(data ? data.stock : null);
    this.DispensaryForm.get('value')?.setValue(data ? data.value : null);
  }

  sellDrug() {
    this.DispensaryForm.value.stock = this.DispensaryForm.value.stock - this.SalesForm.value.quantity;
    this.SalesForm.value.dateTime = new Date().toLocaleString();
    this.SalesForm.value.name = this.DispensaryForm.value.name;
    this.SalesForm.value.valueUnit = this.DispensaryForm.value.value;
    this.SalesForm.value.total = this.SalesForm.value.quantity * this.DispensaryForm.value.value;
    const getSell = window.localStorage.getItem('sell');
    if (getSell ) {
    this.sales =JSON.parse(getSell);
    }
    this.sales.push(this.SalesForm.value);
    this.SalesForm.reset()
    localStorage.setItem("sell", JSON.stringify(this.sales))
    this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'El medicamento fue vendido con éxito' });
    this.displaySell = false;
    this.displayValidateSell = false;
    this.updateDrug()
  }

  // método para eliminar datos de la tabla
  deleteDrug(info: any) {
    let index = this.dispensarys.findIndex(dispensarys => dispensarys.name === info.name )
    if (index !== -1) {
      this.dispensarys.splice(index, 1);
      localStorage.setItem("Dispensario",JSON.stringify(this.dispensarys));
      this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'El medicamento fue eliminado con éxito' });
    }
  }

}
