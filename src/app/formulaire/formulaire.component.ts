import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() formValidated: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(formBuilder: FormBuilder) {

  this.form = formBuilder.group({
    nom: '',
    prenom: '',
    adresse: '',
    cp: '',
    ville: '',
    tel: '',
    email: '',
    civ: '',
    password: '',
    login: '',
    pays: ''
  });
}
  ngOnInit() {
  }
  onSubmit(){
    this.formValidated.emit(this.form);
  }
}


