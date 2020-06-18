import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private afStore: AngularFirestore,
    private db: AngularFireDatabase
  ) {}

  setLocal(nombre, email, telefono, localidad) {
    const id = this.afStore.createId();
    const localRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `local/${id}`
    );
    const localData = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      localidad: localidad,
    };
    localRef.set(localData, { merge: true });
    window.alert('Local registrado');
  }

  setProduto(nombre, marca, stock, tipo, local, precio) {
    const id = this.afStore.createId();
    const prodRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `producto/${id}`
    );
    const proData = {
      nombre: nombre,
      marca: marca,
      stock: stock,
      tipo: tipo,
      local: local,
      precio: precio,
    };
    prodRef.set(proData, { merge: true });
    window.alert('Producto registrado');
  }

  getProductos(): Observable<any[]> {
    return this.afStore.collection('producto').valueChanges();
  }
}
