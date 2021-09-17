import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { GiphyRequest } from '../interfaces/giphy-request';
import { GiphySearchRequest } from '../interfaces/giphy-search-request';
import { GifsUrlServiceReturn } from '../interfaces/gifs-url-service-return';

@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {

  private url: string = 'https://api.giphy.com/v1/gifs'
  private key: string = 'iBsjXg3ShLpEfPVE5CBljRXyk3EicQgr'

  constructor(private http: HttpClient) { }

  getGifsUrl():Observable<GiphyRequest>
  {
    return this.http.get<GiphyRequest>(`${this.url}/random?api_key=${this.key}`);
  }

  searchGifs(
    gifType:string, 
    limit:string
    ):Observable<GifsUrlServiceReturn[]>
    {
      return this.http.get<GiphySearchRequest>(
        `${this.url}/search?api_key=${this.key}&q=${gifType}&limit=${limit}`).pipe(
          map((response:GiphySearchRequest) => {
            let result:GifsUrlServiceReturn[] = []
            for (let i=0; i<response.data.length; i++){  
              let urlObject = {url: response.data[i].images.original.url} 
              
              result.push(urlObject)
            }
            return result
          }
          )
        );
    }

}
