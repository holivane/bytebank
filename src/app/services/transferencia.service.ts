import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.tratar(transferencia);
    this.transferencias.push(transferencia);
  }

  private tratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
