import { Component } from "@angular/core";
import { AffiliateService } from "src/app/services/affiliate.service";

@Component({
    selector: 'app-affiliate',
    templateUrl: './affiliate.component.html',
    styleUrls: ['./affiliate.component.css']
}) 
export class AffiliateComponent {

    searchCategoria = '';

    constructor(public afi: AffiliateService) {
    }
}