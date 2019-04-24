import { Injectable } from '@angular/core';
import {Question} from '../models/Question';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  questions: Question[];
  constructor() {
    this.questions = [
      {
        text: 'what is your name',
        answer: 'My name is manjeet',
        hide: true
      },
      {
        text: 'what is your Age',
        answer: 'I am in 33 yrs old' ,
        hide : true
      },
      {
        text: 'what is your Profession',
        answer: 'Profession is Software development',
        hide: true

      }
    ];
  }
    getQuestions() {
      return this.questions;

    }
}
