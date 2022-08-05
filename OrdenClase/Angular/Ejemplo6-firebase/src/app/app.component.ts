import { Component, OnInit } from '@angular/core';
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
  nombre: string = '';
  telefono: string = '';

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
    this.agendaService
      .nuevoAmigo({ nombre: this.nombre, telefono: this.telefono })
      .then(
        () => {
          alert('contacto añadido');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
