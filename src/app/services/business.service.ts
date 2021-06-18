import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BusinessService {

    constructor(private http: HttpClient) {}
    
    public loadBusiness(cod: string) {
        return this.http.get(`https://business-674f0-default-rtdb.europe-west1.firebasedatabase.app/business/${cod}.json`);
    }
}