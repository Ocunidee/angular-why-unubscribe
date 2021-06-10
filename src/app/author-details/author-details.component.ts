import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { authorDetails } from "../data/author-details";
import { AuthorDetail } from "../models/author-detail";

@Component({
  selector: "app-author-details",
  templateUrl: "./author-details.component.html",
  styleUrls: ["./author-details.component.css"]
})
export class AuthorDetailsComponent implements OnInit {
  details: AuthorDetail | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.details = authorDetails.get(Number(id));
  }
}
