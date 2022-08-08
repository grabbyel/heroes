import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  logeado: boolean = false;
  registro: boolean = false; // true - está registrado, muestra página; false - muestra formulario registro
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login(this.email, this.password).then(
      (data) => {
        alert('Usuario autenticado');
        this.logeado = true;
      },
      (error) => {
        console.log(error);
        alert('usuario no encontrado');
      }
    );
  }

  registrar() {
    if (this.password == this.confirmPassword) {
      this.loginService.registro(this.email, this.password).then(
        (data) => {
          alert('Usuario registrado');
        },
        (error) => {
          console.log(error);
          alert('usuario no registrado');
        }
      );
    } else alert('El password y la confirmación no coinciden');
  }

  logOut() {
    this.loginService
      .logout(this.email, this.password)
      .then(() => {
        alert('Sesion cerrada');
        this.logeado = false;
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
