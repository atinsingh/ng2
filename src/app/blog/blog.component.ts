import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  name:string = 'Prakash'
  upper: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param=>{
        this.upper  = param.upper||true
    })
    this.route.params.subscribe(param=>{
        this.name = param.name;
    })
  }

}
