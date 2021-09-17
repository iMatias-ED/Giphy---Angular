import { Component } from '@angular/core';

import { GiphyAPIService } from '../services/giphy-api.service';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent{

  public userInput!:string;
  public urlArray:string[] = [];
  public resultLimit:string = '10';

  constructor(private api: GiphyAPIService) { }

  searchGif(valor:string):void{
    this.api.searchGifs(valor, this.resultLimit).subscribe(data =>{
      this.urlArray = []
      for (let i=0; i<data.length; i++){
        this.urlArray.push(data[i].url)
      }
    })
  }

  resultLimitChanged():void{
    this.searchGif(this.userInput)
  }
}
