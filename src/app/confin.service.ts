import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { NovaCompraModel } from './models/NovaCompraModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfinService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://localhost:7044/api/Compra/'
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  novaCompra(viewModel: NovaCompraModel): Observable<NovaCompraModel> {
    return this.http.post<NovaCompraModel>(this.apiUrl + 'NovaCompra', viewModel, this.httpOptions);
  }
}
