import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BusinessService } from "src/app/services/business.service";

@Component({
    selector: 'app-business',
    templateUrl: './business.component.html',
    styleUrls: ['./business.component.css']
}) 
export class BusinessComponent {

    cod: string = '';
    details: any = [];

    constructor(public bus: BusinessService ,private route: ActivatedRoute) {
        route.params.subscribe( params => {
            this.cod = params['id'];
            bus.loadBusiness(this.cod).subscribe((resp: any) => {
                this.details = resp;
                console.log(this.details);
            });
        })
    }
}