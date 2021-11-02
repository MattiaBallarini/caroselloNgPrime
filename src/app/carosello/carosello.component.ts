import { Component, OnInit } from '@angular/core';
import { Utente, Utenti } from '../interfaces/utenti';
import { DownloadUtentiService } from '../services/download-utenti.service';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.scss']
})
export class CaroselloComponent implements OnInit {

  utenti: Utente[] | undefined | null;
  pagina : number = 1;
  perPagina : number = 12
  nome: string = "";
	
	responsiveOptions: any;

	constructor(
    private downloadUtenteService: DownloadUtentiService
    ) { 
    //questo è per il responsive con i vari breakpoint per i diversi formati di schermo
		this.responsiveOptions = [
            {
                breakpoint: '10000px', //da 768px fino a 10000px (numero alto a scelta) mostra 3 card e scrolla uno per volta
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '900px', //da 561 a 900px mostra 2 card e scrolla uno per volta
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '560px', //fino a 560 mostra 1 card e scrolla uno per volta
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit(): void {
    this.downloadUtenteService.getUtenti(this.pagina, this.perPagina).subscribe({
      //in caso di codice di successo (200, 201, etc)
      next: risultato => {
        this.utenti = risultato.data;
        console.log(risultato);
      },
      //in caso di codice di errore (400, 401, 4040, 500, etc)
      error: err => {
        console.error("QUESTO è UN ERRORE", err.status);
      }
    });
  }


}
