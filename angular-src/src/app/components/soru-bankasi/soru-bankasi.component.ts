import { Component } from "@angular/core";
import { SoruBankasiService } from "src/app/services/soru-bankasi.service";
import { SoruBankasi } from "./soruBankasi";

@Component({
  selector: "app-soru-bankasi",
  templateUrl: "./soru-bankasi.component.html",
  styleUrls: ["./soru-bankasi.component.scss"]
})
export class SoruBankasiComponent {
  constructor(private soruBankasiService: SoruBankasiService) {}
  soruBankasi: any = {};
  mesajTur;
  saveQuestion(soruBankasi: SoruBankasi) {
    soruBankasi.soruldu = false;
    this.soruBankasiService.saveQuestion(soruBankasi).subscribe(
      data => {
        this.mesajTur = "success";
      },
      error => {
        this.mesajTur = "error";
      }
    );
    this.clearSoruBankasi(soruBankasi);
  }
  clearSoruBankasi(soruBankasi: SoruBankasi) {
    soruBankasi.cevap = "";
    soruBankasi.cevapharfsayisi = "";
    soruBankasi.soru = "";
  }
}
