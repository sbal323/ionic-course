import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { BookingsPageRoutingModule } from "./bookings-routing.module";

import { BookingsPage } from "./bookings.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsPageRoutingModule,
    SharedModule,
  ],
  declarations: [BookingsPage],
})
export class BookingsPageModule {}
