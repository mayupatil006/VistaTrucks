import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  FormArray,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AtlService } from "../atl.service";

@Component({
  selector: "app-atl",
  templateUrl: "./atl.component.html",
  styleUrls: ["./atl.component.css"],
  providers: [AtlService],
})
export class AtlComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private atlService: AtlService,
  ) {}

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      vehicleNo: ["", [Validators.required, Validators.minLength(4)]],
      contactNo: ["", [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit() {
    this.atlService.addAtl(this.customerForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
