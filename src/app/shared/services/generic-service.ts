import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })

  export class GenericService {

    baseUrl: string = "http://localhost:3000/"

    constructor(private http: HttpClient){

    }

    getAll(componentUrl: string, successCallback: any = ()=>{}){
        this.http.get(this.baseUrl + componentUrl).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    getById(componentUrl: string, payload:any, successCallback: any = ()=>{}){
        this.http.get(this.baseUrl + componentUrl+payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    crear(componentUrl: string, payload: any, successCallback: any = ()=>{}){
        this.http.post(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
            successCallback(response);
            Swal.fire("Éxito!","Creado exitosamente", "success");
        }, (error) => {
            console.log(error);
        });
    }

    actualizar(componentUrl: string,id:string , payload: any, successCallback: any = ()=>{}){
        this.http.put(this.baseUrl + componentUrl+id, payload).subscribe((response: any) => {
            successCallback(response);
            Swal.fire("Éxito!","Actualizado exitosamente", "success");
        }, (error) => {
            console.log(error);
        });
    }

    borrar(componentUrl: string, payload: any, successCallback:any = ()=>{}){
        this.http.delete(this.baseUrl+componentUrl+payload).subscribe((response: any) => {
            successCallback(response);
            Swal.fire("Éxito!","Eliminado exitosamente", "success");
        }), (error) => {
            console.log(error);
        }
    }


}
