import { Component ,OnInit} from '@angular/core';
import { Post } from '../model/post.model';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  constructor(private serverHttpService: ServerHttpService) { }
  userId: any ="";
  title: string = '';
  post = new Post(1,1,"");




  ngOnInit(): void {}


  submit(){
    this.post.userId=this.userId;
    this.post.title =this.title;
    this.addPost(this.post)
  }
  addPost(post:Post) {
    this.serverHttpService.addPost(post).subscribe(
      (res) => {
        console.log("----------------", res)
      }
    )
  }
}
