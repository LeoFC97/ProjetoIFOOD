import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from './../database/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesProvider {

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello ClientesProvider Provider');
  }

  public insertNovoCliente(cliente: Cliente)
  {
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>
    {
      let sql= 'insert into cliente(nome,telefone,email,senha,estado,cidade,bairro,rua,numero,complemento) values (?,?,?,?,?,?,?,?,?,?)';
      let data = [cliente.nome, cliente.telefone, cliente.email, cliente.senha, cliente.estado,cliente.bairro,cliente.rua,cliente.complemento]; 

      return db.executeSql(sql,data)
      .catch((e)=> console.error(e));
    })
    .catch((e)=> console.error(e));
  }

  public update(cliente: Cliente)
  {
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>
    {
      let sql= 'update cliente set nome= ?,telefone=?,email=?,senha=?,estado=?,cidade=?,bairro=?,rua=?,numero=?,complemento=? where id=?';
      let data = [cliente.nome, cliente.telefone, cliente.email, cliente.senha, cliente.estado,cliente.bairro,cliente.rua,cliente.complemento, cliente.id]; 

      return db.executeSql(sql,data)
      .catch((e)=> console.error(e));
    })
    .catch((e)=> console.error(e));
  }
  public get (id:number)
  {
    return this.dbProvider.getDB()
    .then((db:SQLiteObject)=>
    {
      let sql = 'select * from cliente where id=?';
      let data = [id];
      return db.executeSql(sql,data)
      .then((data:any)=>
      {
        if(data.rows.length >0)
        {
          let item = data = data.rows.item(0);
          let cliente = new Cliente();
          cliente.id=item.id;
          cliente.telefone=item.telefone;
          cliente.email=item.email;
          cliente.senha=item.senha;
          cliente.estado=item.estado;
          cliente.cidade=item.cidade;
          cliente.bairro=item.bairro;
          cliente.rua=item.rua;
          cliente.numero=item.numero;
          cliente.complemento=item.complemento;
          cliente.nome=item.nome;
        }
        return null;
      })
      .catch((e)=>console.error(e));
    })
    .catch((e)=> console.error(e));
  }

}

export class Cliente
{
  id:number;
  nome: string;
  telefone: string;
  email: string;
  senha:string;
  estado: string;
  cidade:string;
  bairro:string;
  rua:string;
  numero:string;
  complemento:string;
  constructor(id?: number, nome?:string, telefone?: string,email?: string,senha?: string,cidade?: string,estado?: string,bairro?: string,rua?: string,numero?: string,complemento?: string)
  {
    this.id=id;
    this.nome=nome;
    this.telefone=telefone;
    this.email=email;
    this.senha=senha;
    this.estado=estado;
    this.cidade=cidade;
    this.bairro=bairro;
    this.rua=rua;
    this.numero=numero;
    this.complemento=complemento;
  }
}