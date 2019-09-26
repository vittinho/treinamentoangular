import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private resource: string = 'https://jsonplaceholder.typicode.com';

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      'nome': [null, Validators.required],
      'idade': [],
      'endereco': this.formBuilder.group({
        'rua': [Validators.required],
        'numero': []
      }),
      'permissoes': [[]]
    });
  }

  buscarPosts(){

    this.httpCliente.get(`${this.resource}/todos`).subscribe((posts: any) => {
      console.log(posts);
    });

  }

  salvarPosts(){

    const requestBody={
        title: 'Primeiro post',
        body: 'Que dia',
        userId: 1
      }

    this.httpCliente.post(`${this.resource}/todos`, requestBody).subscribe((posts: any) => {
      console.log(posts);
    });

  }

  onSubmit(){
    if(this.formulario.invalid){

      const idadeControl = this.formulario.get('idade') as FormControl;
      const nomeControl = this.formulario.get('nome') as FormControl;

      idadeControl.markAsDirty();
      nomeControl.markAsDirty();

        console.log(this.formulario.controls);

    }else{
    console.log(this.formulario.value);
    }
  }

  public formulario: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private httpCliente: HttpClient
  ){}


  public ultimoBotaoClicado: number;
  public mostrarLinhaCodigo: boolean = true;
  public salario: number = 10000;
  public linhasDeCodigo: number[] = [
    10,
    20,
    30,
    100
  ];

  public permissoes: string[] = [
    'MOD',
    'ADMIN',
    'VISIT'
  ];

  atualizarBotaoClicado(botao: number){
    this.ultimoBotaoClicado = botao;
  }

  getNome(){
    return 'Victor Morais';
  }

  printBotao(botao: number){
    console.log(`O botão ${botao} foi clicado`);
  }

}
