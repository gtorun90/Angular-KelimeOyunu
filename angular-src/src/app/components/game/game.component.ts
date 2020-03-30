import { Component } from "@angular/core";
import { SoruBankasi } from "../soru-bankasi/soruBankasi";
import { error } from "protractor";
import { SoruBankasiService } from "src/app/services/soru-bankasi.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent {
  sorular: SoruBankasi[];
  mesaj: string = null;
  mesajClass: string = "";
  mesajSure: any = null;
  mevcutSoru: SoruBankasi = null;
  harfler: any[] = [];
  puan: number = 0;
  harfPuan: number = 0;
  yarismaciCevap: string = "";
  tamamlandi: boolean = false;
  cevaplandi: boolean = false;
  sure: any = null;
  toplamSure: any = null;
  kalanSure: number = 0;
  toplamKalanSure: number = 0;
  // apiUrl="https://localhost:44341/api/SoruCevaps";
  constructor(private soruBankasiService: SoruBankasiService) {
  }

  sorulariGetir(cb) {
    return this.soruBankasiService.getQuestions().subscribe(
      data => {
        this.sorular = data;
        this.sorular.map(x => {
          x.soruldu = false;
        });
        cb();
      },
      error => {}
    );
  }

  mesajGoster(mesaj: string, tur: MesajTurleri = null): void {
    if (this.mesajSure) {
      clearTimeout(this.mesajSure);
      this.mesajSure = null;
    }
    this.mesaj = mesaj;
    let stopInterVal = false;
    if (tur === MesajTurleri.hata) {
      this.mesajClass = "bg-danger text-white";
      stopInterVal = true;
    } else if (tur === MesajTurleri.basari) {
      this.mesajClass = "bg-success text-white";
      stopInterVal = true;
    } else {
      this.mesajClass = "bg-dark text-white";
    }
    if (stopInterVal) {
      clearInterval(this.sure);
    }
    this.mesajSure = setTimeout(() => {
      this.mesaj = null;
    }, 3000);
  }
  basla(): void {
    this.tamamlandi = false;
    this.mevcutSoru = null;
    this.puan = 0;
    this.toplamSureGoster();
    this.sorulariGetir(this.soruVer);
    this.mesajGoster("İyi yarışmalar!");
  }
  toplamSureGoster() {
    this.toplamKalanSure = 300;
    this.toplamSure = setInterval(() => {
      this.toplamKalanSure--;
      if (this.toplamKalanSure === 0) {
        this.bitir();
      }
    }, 1000);
  }
  cevapSureGoster() {
    this.kalanSure = 30;
    this.sure = setInterval(() => {
      this.kalanSure--;
      if (this.kalanSure === 0) {
        this.bitir();
      }
    }, 1000);
  }
  bitir(): void {
    clearInterval(this.sure);
    this.mevcutSoru = null;
    this.tamamlandi = true;
  }
  soruVer(): void {
    this.yarismaciCevap = "";
    this.cevaplandi = false;
    this.mevcutSoru = this.sorular.find(x => x.soruldu == false);
    if (
      this.harfler.filter(x => x.acildi).length > 0 &&
      this.harfler.filter(x => x.acildi).length === this.harfler.length
    ) {
      clearInterval(this.sure);
    }
    if (!this.mevcutSoru) {
      this.bitir();
      return;
    }
    this.cevapSureGoster();
    this.harfler = [];
    this.mevcutSoru.cevap.split("").map(x => {
      this.harfler.push({
        harf: x,
        acildi: false
      });
    });
    this.harfPuan = this.harfler.length * 100;
    this.mevcutSoru.soruldu = true;
  }
  harfVer(cevaplandi: boolean): void {
    let rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);

    if (!cevaplandi && this.harfPuan <= 100) {
      return;
    }

    let harf = this.harfler[rastgeleHarfIndex];
    while (harf.acildi) {
      rastgeleHarfIndex = Math.floor(Math.random() * this.harfler.length);
      harf = this.harfler[rastgeleHarfIndex];
    }
    harf.acildi = true;
    if (!cevaplandi) {
      this.harfPuan -= 100;
    }
  }
  cevapVer(): void {
    if (!this.yarismaciCevap.length) {
      return;
    }

    if (this.yarismaciCevap.length !== this.harfler.length) {
      this.mesajGoster("Harf sayıları tutmuyor!");
      return;
    }
    let cevap = (this.yarismaciCevap as any).toLocaleUpperCase(
      "tr-TR"
    ) as string;
    this.yarismaciCevap = cevap;

    if (
      this.yarismaciCevap ===
      ((this.mevcutSoru.cevap as any).toLocaleUpperCase("tr-TR") as string)
    ) {
      if (!this.cevaplandi) {
        this.puan += this.harfPuan;
        this.cevaplandi = true;
        this.mesajGoster("Tebrikler, doğru bildiniz!", MesajTurleri.basari);
      }
    } else {
      if (!this.cevaplandi) {
        if (this.puan >= this.harfPuan) {
          this.puan -= this.harfPuan;
        } else {
          this.puan = 0;
        }
        this.cevaplandi = true;
        this.mesajGoster(
          `Yanlış cevap, doğrusu '${this.mevcutSoru.cevap}' olmalıydı!`,
          MesajTurleri.hata
        );
      }
    }

    this.harfler.forEach(x => {
      if (this.harfler.filter(x => x.acildi).length !== this.harfler.length) {
        this.harfVer(this.cevaplandi);
      }
    });

    //this.soruVer();
  }
  enterIleCevapVer(event: KeyboardEvent): void {
    if (event.key === Tuslar.Enter) this.cevapVer();
  }
}
enum MesajTurleri {
  hata,
  basari
}
enum Tuslar {
  Enter = "Enter"
}
