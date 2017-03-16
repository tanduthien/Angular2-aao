import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
    imports: [BrowserModule, DashboardModule,
        RouterModule.forRoot([
            {
                path: "/dashboard", component: DashboardComponent
                // canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/dashboard" }
        ])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
