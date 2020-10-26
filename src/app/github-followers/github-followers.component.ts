import { GithubFollowersService } from "./../services/github-followers.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import "rxjs/add/observable/combineLatest";

@Component({
  selector: "github-followers",
  templateUrl: "./github-followers.component.html",
  styleUrls: ["./github-followers.component.css"],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    Observable.combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get("id");
          let page = combined[1].get("page");

          // this.service.getAll({id: id, page: page})
          return this.service.getAll();
          //.subscribe((followers) => (this.followers = <any[]>followers));
        })
      )
      .subscribe((followers) => {
        this.followers = <any[]>followers;
      });
  }
}
