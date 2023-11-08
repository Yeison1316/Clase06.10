import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private route :Router){}
  cerrar_sesion() {
    const confirmacion = confirm('¿Estás seguro de que deseas cerrar la sesión?');
    if (confirmacion) {
      localStorage.removeItem('token_auth');
      this.route.navigate(['']);
      console.log('Cerrando sesión...');
    } else {
      console.log('Cierre de sesión cancelado.');
    }
  }
}
