import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private socket: Socket) { }


  notificar(evento: string, data: any) {
    this.socket.emit(evento, data);
  }

  userConnected() {
    return this.socket.fromEvent('User connected').pipe(map((data: any) => {
      return data;
    }));
  }

  solicitudCreada() {
    return this.socket.fromEvent('nueva-solicitud').pipe(map((data) => { return data }));
  }

}