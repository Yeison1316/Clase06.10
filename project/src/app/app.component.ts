import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  //constructor (private http: HttpClient){}
  ngOnInit(){
    /*this.http.get("https://api.escuelajs.co/api/v1/products")
    .subscribe((res:any)=> {
      console.log(res);
    }) */ 
  };
}
