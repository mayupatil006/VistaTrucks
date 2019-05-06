import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AtlService {
  constructor(private http: HttpClient) {}
  addAtl(data) {
    console.log(data);
    return this.http.post("http://localhost:3000/data", data);
  }
}
