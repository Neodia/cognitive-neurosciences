import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Tuto } from './tuto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbPath = '/Tutos';

  tutosRef: AngularFireList<Tuto> = null;

  constructor(private db: AngularFireDatabase) {
    this.tutosRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tuto> {
    return this.tutosRef;
  }

  create(tuto: Tuto): any {
    return this.tutosRef.push(tuto);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutosRef.remove();
  }
}
