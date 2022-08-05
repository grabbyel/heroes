import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor(private angularFirestore: AngularFirestore) {}

  public todosAmigos() {
    return this.angularFirestore.collection('agenda').snapshotChanges();
  }

  public buscarAmigo(id: string) {
    return this.angularFirestore.collection('agenda').doc(id).snapshotChanges();
  }

  public nuevoAmigo(nuevo: any) {
    return this.angularFirestore.collection('agenda').add(nuevo);
  }

  public eliminarAmigo(id: string) {
    return this.angularFirestore.collection('agenda').doc(id).delete();
  }

  public modificarAmigo(id: string, data: any) {
    return this.angularFirestore.collection('agenda').doc(id).set(data);
  }
}
