import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUsuario(){
    this.usuarioService.createUsuario(this.usuario).subscribe(data => {
      console.log(data);
      this.goToUsuarioList();
    });
  }

  goToUsuarioList(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    console.log(this.usuario);
    this.saveUsuario();
  }

}