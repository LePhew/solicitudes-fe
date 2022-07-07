import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private socket: Socket) { }


  notificar(evento: string, data: any) {
    this.socket.emit(evento, data);
  }

  subscribir(evento: string, successCallback: any = () => { }) {
    this.socket.on(evento, successCallback);
  }
}
