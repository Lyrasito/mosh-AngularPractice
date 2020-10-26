import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  archives: any[] = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
