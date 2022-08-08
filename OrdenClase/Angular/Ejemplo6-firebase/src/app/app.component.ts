import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from './services/agenda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contactos: any = [];
  id: string = '';
  amigo: any;

  amigoForm = new FormGroup({
    nombre: new FormControl('', Validators.minLength(3)),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern('[6-7]{1}[0-9]{8}'),
    ]),
  });

  public get nombre() {
    return this.amigoForm.get('nombre');
  }
  public get telefono() {
    return this.amigoForm.get('telefono');
  }

  constructor(private agendaService: AgendaService) {}
  ngOnInit(): void {
    this.agendaService.todosAmigos().subscribe((datos) => {
      // console.log(datos);
      this.contactos = []; // Con esto limpiamos el array de contactos
      datos.forEach((item) => {
        this.contactos.push(item.payload.doc.data());
      });
      console.log(this.contactos);
      // console.log(this.contactos[0].nombre);
    });
  }
  buscar() {
    this.agendaService.buscarAmigo(this.id).subscribe((item) => {
      this.amigo = item.payload.data();
    });
  }

  borrar() {
    this.agendaService.eliminarAmigo(this.id).then(
      () => {
        alert('contacto eliminado');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  alta() {
    this.agendaService.nuevoAmigo(this.amigoForm.value).then(
      () => {
        alert('contacto añadido');
        this.amigoForm.reset(); // con esto reseteamos EL FORMULARIO
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
