import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class GenericService {

    baseUrl: string = "http://localhost:3000/"

    constructor(private http: HttpClient){

    }

    getAll(componentUrl: string, successCallback: any){
        this.http.get(this.baseUrl + componentUrl).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    crear(componentUrl: string, payload: any){
        this.http.post(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
            alert("Creado exitosamente");
        }, (error) => {
            console.log(error);
        });
    }

    actualizar(componentUrl: string, payload: any){
        this.http.put(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
            alert("Actualizado exitosamente");
        }, (error) => {
            console.log(error);
        });
    }

    borrar(componentUrl: string, payload: any){
        this.http.delete(this.baseUrl+componentUrl, payload).subscribe((response: any) => {
            alert("Eliminado exitosamente");
        }), (error) => {
            console.log(error);
        }
    }


}
