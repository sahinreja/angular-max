import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule , FormsModule } from '@angular/forms';


import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [  CommonModule , ReactiveFormsModule , FormsModule , ShoppingListRoutingModule],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})
export class ShoppingListModule {

}