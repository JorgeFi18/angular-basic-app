import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  public listadoContactos: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  public agregarContacto(contacto) {
    this.listadoContactos.push(contacto);
  }

}
