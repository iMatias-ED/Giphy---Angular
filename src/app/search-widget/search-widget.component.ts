import { Component, OnInit } from '@angular/core';
import { GiphyAPIService } from '../services/giphy-api.service';
import { GiphyRequest } from '../interfaces/giphy-request';
import { GiphySearchRequest } from '../interfaces/giphy-search-request';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {

  public userInput!:string;
  public urlArray!:string[];
  public resultLimit:string = '10';

  constructor(private api: GiphyAPIService) { }

  ngOnInit(): void {
  }

  searchGif(valor:string):void{
    this.api.searchGifs(valor, this.resultLimit).subscribe(data =>{
      this.urlArray = []
      console.log(data)
      for (let i=0; i<parseInt(this.resultLimit); i++){
        this.urlArray.push(data.data[i].images.original.url)
      }
    })
  }

  resultLimitChanged():void{
    this.searchGif(this.userInput)
  }

}
