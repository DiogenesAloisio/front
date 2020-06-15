import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  getAnotacao(): Observable<import("./anotacao.interface").Anotacao> {
    throw new Error("Method not implemented.");
  }

  constructor(private http : HttpClient) { }

  getPessoa(): Observable<any>{
    return this.http.get('https://localhost:5002/api/anotacoes/1/100');
    
  }
}