import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AtlComponent } from "./atl/atl.component";

const routes: Routes = [
  {
    path: "",
    component: AtlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
