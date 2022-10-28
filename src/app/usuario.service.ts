import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "Teste"
    usuario.email = "teste@test.com"

    return usuario
  }


public listausuario():Usuario[]{
  return [
    {
      nome: "Joao",
      email: "joao@teste.com"
    },
    {
      nome: "Jose",
      email: "jose@teste.com"
    },
    {
      nome: "Pedro",
      email: "Pedro@teste.com"
    },
  ]
}
}
