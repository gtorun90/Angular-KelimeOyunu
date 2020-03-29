import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SoruBankasi } from "../components/soru-bankasi/soruBankasi";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SoruBankasiService {
  constructor(private http: HttpClient) {}
  path = environment.path;

  getQuestions(): Observable<SoruBankasi[]> {
    // let getUrl = this.path + 'home/index'
    let getUrl = "home/index";
    return this.http.get<SoruBankasi[]>(getUrl);
  }
  saveQuestion(soruBankasi:SoruBankasi):Observable<SoruBankasi> {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    // let postUrl = this.path + 'home/saveQuestion'
    let postUrl = "home/saveQuestion";
    return this.http
      .post<SoruBankasi>(postUrl, soruBankasi, { headers: headers })
  }
}
