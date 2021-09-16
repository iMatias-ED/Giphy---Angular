import { Component, OnInit } from '@angular/core';

import { GiphyAPIService } from '../services/giphy-api.service';

@Component({
  selector: 'app-home-gif-section',
  templateUrl: './home-gif-section.component.html',
  styleUrls: ['./home-gif-section.component.css']
})
export class HomeGifSectionComponent implements OnInit {

  constructor(private api: GiphyAPIService) { }

  gifUrlArray:string[] = [];

  ngOnInit(): void {
      for (let i=0; i<10; i++){
      this.api.getGifsUrl().subscribe(data => {
        console.log(data)
        this.gifUrlArray.push(data.data.image_url);
      })
    }
  }

}
