// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-form-test-one',
  templateUrl: './form-test-one.component.html',
  styleUrls: ['./form-test-one.component.css']
})
export class FormTestOneComponent implements OnInit {


  public dados: any[] = [];
  public dadosDistintos: any[] = [];

  public formulario: FormGroup;


  constructor(
    private title: Title,
    private formBuilder: FormBuilder
  ) { }



  ngOnInit(): void {
    this.title.setTitle('RH Digistarts');

    this.configurarFormulario();

    console.log(this.dados);

  }



  configurarFormulario() {

    this.formulario = this.formBuilder.group({
      inputUser: [null, [Validators.required, Validators.min(1), Validators.max(1000)]]
    });
  }



  salvar(): void {

    this.dados.push(this.formulario.value);

    this.formulario.reset();


    this.atualizaConjuntoDadosDistintos();

  }



  atualizaConjuntoDadosDistintos() {

    this.dadosDistintos = Object.values(this.dados.reduce((acc, cur) => Object.assign(acc, { [cur.inputUser]: cur }), {}));
  }



  limpar() {


    // this.dados = this.dados.length[0];
    // console.log(this.dados.length);
    this.dados = [];
    this.dadosDistintos = [];

    /*
    while (this.dados.length) {
      this.dados = [] = [];
    }*/

    console.log(this.dados);




  }
}
