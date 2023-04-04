import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post.model';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private serverHttpService: ServerHttpService) { }
  datas: Post[] = [];
  ngOnInit(): void {
    this.getAllTest();
  }

  getAllTest() {
    this.serverHttpService.getAllPost().subscribe(
      (res) => {
        this.datas = res;
        console.log("----------------", this.datas)
      }
    )
  }
}
