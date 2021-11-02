import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utenti } from '../interfaces/utenti';


@Injectable({
  providedIn: 'root'
})
export class DownloadUtentiService {

  constructor(
    private http : HttpClient
  ) { }

  getUtenti(pagina: number, perPagina: number) : Observable<Utenti>{
    return this.http.get<Utenti>(`${environment.endPoint}/users`, {
      params : {
        page : pagina,
        per_page : perPagina
      }
    })
  }




}
