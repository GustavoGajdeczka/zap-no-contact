import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zap-no-contact',
  templateUrl: './zap-no-contact.component.html',
  styleUrls: ['./zap-no-contact.component.css']
})
export class ZapNoContactComponent implements OnInit {

  whatsappNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToWhatsapp(){
    var phoneno = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if(this.whatsappNumber.match(phoneno)) {
      window.location.href = `https://api.whatsapp.com/send?phone=55${this.whatsappNumber.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')}`;
    }
    else {
      alert(`Numero Invalido: ${this.whatsappNumber.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '')}`);
    }
  }

  telefone(){
    this.whatsappNumber = this.whatsappNumber.replace(/\D/g,"")                 //Remove tudo o que não é dígito
    this.whatsappNumber = this.whatsappNumber.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    this.whatsappNumber = this.whatsappNumber.replace(/(\d{5})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
  }

}
