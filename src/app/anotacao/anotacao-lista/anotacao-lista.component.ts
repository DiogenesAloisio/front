import { Component, OnInit } from '@angular/core';

import { Anotacao} from '../anotacao.interface'; 
import { Observable } from 'rxjs';
import { AnotacaoService } from '../anotacao.service'

@Component({
  selector: 'app-anotacao-lista',
  templateUrl: './anotacao-lista.component.html',
  styleUrls: ['./anotacao-lista.component.css']
})
export class AnotacaoListaComponent implements OnInit {
  
  anotacao : Observable<Anotacao> ;

  constructor(private servico: AnotacaoService) { }

  ngOnInit(): void {
    this.anotacao = this.servico.getAnotacao();
  }

}
