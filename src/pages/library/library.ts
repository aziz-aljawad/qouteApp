import { Component, OnInit } from '@angular/core';
import quotes from '../../Data/quotes';
import { Quote } from '../../Data/qoutes.interface';
import { QoutesPage } from '../qoutes/qoutes';
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
qoutesCollections: {category:string, quotes: Quote[],icon:string}[]
quotesPage =QoutesPage;
  ngOnInit(){
    this.qoutesCollections =quotes;
  }
}
