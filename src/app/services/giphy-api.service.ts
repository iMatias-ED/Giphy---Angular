import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GiphyRequest } from '../interfaces/giphy-request';
import { GiphySearchRequest } from '../interfaces/giphy-search-request';

@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {

  private key: string = 'iBsjXg3ShLpEfPVE5CBljRXyk3EicQgr'

  constructor(private http: HttpClient) { }

  getGifsUrl():Observable<GiphyRequest>
  {
    return this.http.get<GiphyRequest>(`https://api.giphy.com/v1/gifs/random?api_key=${this.key}`);
  }
  searchGifs(gifType:string, limit:string):Observable<GiphySearchRequest>{
    console.log(`https://api.giphy.com/v1/gifs/search?api_key=${this.key}&q=${gifType}&limit=${limit}`)
    return this.http.get<GiphySearchRequest>(`https://api.giphy.com/v1/gifs/search?api_key=${this.key}&q=${gifType}&limit=${limit}`);
  }

}
