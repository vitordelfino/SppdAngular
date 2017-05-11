import { CartaoComponent } from './cartao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CartaoComponent],
  exports:[CartaoComponent]
})
export class CartaoModule { }
