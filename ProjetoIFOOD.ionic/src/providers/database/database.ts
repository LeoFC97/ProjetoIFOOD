import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';


@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite)
  {

  }
  public getDB()
  {
    return this.sqlite.create({
      name: 'ifood.db',
      location: 'default'
    });

  }
  public createDatabase()
  {
    return this.getDB()
    .then((db: SQLiteObject) =>
    {
      this.createTables(db);

    })
    .catch(e => console.error(e));
  }

  private createTables(db:SQLiteObject)
  {
    db.sqlBatch([
      ['create table if not exists cliente (id integer primary key autoincrement not null, nome text, telefone text, email text, senha text, estado text, cidade text, bairro text, rua text, numero text, complemento text)']
    ])
    .then(()=> console.log('Tabelas criadas com sucesso'))
    .catch(e =>console.error('Erro ao criar as tabelas', e));
  }
}