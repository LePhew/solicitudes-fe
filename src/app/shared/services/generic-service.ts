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

    getByMat(componentUrl: string, payload:any, successCallback: any = ()=>{}){
        this.http.get(this.baseUrl + componentUrl+payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }
    getEstudianteDocs(componentUrl: string, payload:any, successCallback: any = ()=>{}){
        this.http.post(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
            successCallback(response);
        }, (error) => {
            console.log(error);
        });
    }

    crear(componentUrl: string, payload: any, successCallback: any = ()=>{}){
     this.http.post(this.baseUrl + componentUrl, payload).subscribe((response: any) => {
    successCallback(response);
            Swal.fire({
                title: 'Desea Realizar esta operacion?',
                text: "Esta Función Va a producir Cambios importates en el Sistema ",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar',
                cancelButtonText:'Cancelar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire("Éxito!","Creado exitosamente", "success");

                }
              })
            
        }, (error) => {
            console.log(error);
        });
    }

    actualizar(componentUrl: string,id:string , payload: any, successCallback: any = ()=>{}){
        this.http.put(this.baseUrl + componentUrl+id, payload).subscribe((response: any) => {
            successCallback(response);
            Swal.fire({
                title: 'Desea Realizar esta operacion?',
                text: "Al actulaizar producira Cambios en el Fichero ",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar',
                cancelButtonText:'Cancelar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire("Éxito!","Actualizado exitosamente", "success");
                }
              })
        }, (error) => {
            console.log(error);
        });
    }

    borrar(componentUrl: string, payload: any, successCallback:any = ()=>{}){
        this.http.delete(this.baseUrl+componentUrl+payload).subscribe((response: any) => {
            successCallback(response);
            Swal.fire({
                title: 'Desea Realizar esta operacion?',
                text: "Al Borrar este fiche producira Cambios irreversible",
                type: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar',
                cancelButtonText:'Cancelar'
              }).then((result) => {
                if (result.value) {
                  Swal.fire("Éxito!","Eliminado exitosamente", "success");
                }
              })
        }), (error) => {
            console.log(error);
        }
    }


}
