import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Affiliate } from "../interfaces/affiliate.interface";

@Injectable({
    providedIn: 'root'
})
export class AffiliateService {

    affiliates: any[] = [];

    constructor(private http: HttpClient) {
        this.loadAffiliates();
    }

    loadAffiliates() {
        this.http.get('https://business-674f0-default-rtdb.europe-west1.firebasedatabase.app/afiliate.json')
        .subscribe( (res: any) => {
            this.affiliates = res;
            console.log(this.affiliates);
        });
    }
}