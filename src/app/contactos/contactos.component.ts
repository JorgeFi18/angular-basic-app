import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  @Output() onGrabar = new EventEmitter<any>();
  
  public nombre;
  public telefono;

  constructor() { }

  ngOnInit() {
    this.clear();
  }

  public grabarContacto() {
    this.onGrabar.emit({
      nombre: this.nombre,
      telefono: this.telefono
    });
    this.clear();
  }

  private clear() {
    this.nombre = '';
    this.telefono = '';
  }

}
