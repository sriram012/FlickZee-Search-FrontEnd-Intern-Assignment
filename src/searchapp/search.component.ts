import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchAppComponent {
  title = 'FlickZee';
  search_input = "";
  letters_count = 0;
  results = [];
  show_results: boolean = true;

  can_req = true;

  constructor(private http: HttpClient) { }

  search(event: KeyboardEvent) {
    if (this.search_input != (event.target as HTMLInputElement).value) {
      this.search_input = (event.target as HTMLInputElement).value;
      this.letters_count = this.search_input.length;

      if (this.letters_count > 3) {
        if (this.can_req) this.searchName(this.search_input);
      } else {
        this.results = [];
        this.show_results = true;
      }
    }
  }

  searchName(movie_name: String) {
    const jsonData = { 'movie_name': movie_name };

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
    
    this.can_req = false;
    this.results = [];
    const temp = this.search_input;
    
    this.http.post(`http://localhostIP/api/flickzee/search`, JSON.stringify(jsonData), {  //  localhostIP -> ip address of localhost
      headers: headers
    })
    .subscribe((data) => {
      this.results = data["results"];
      this.can_req = true;
      this.show_results = this.results.length == 0 ? false : true;
      
      if (temp != this.search_input) this.searchName(this.search_input);
    },
    (error) => {
      console.log(error);
    });
  }
}
