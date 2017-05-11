import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() codCartao: number;
  
  @Output() acao = new EventEmitter();


  meuForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.meuForm = fb.group({
      cartao: ['', Validators.compose(
        [ Validators.required, Validators.minLength(6) ]
        )]
    });
   }

  ngOnInit() {
  }

  executaAcao(){
    this.acao.emit(this.codCartao);
  }
}
