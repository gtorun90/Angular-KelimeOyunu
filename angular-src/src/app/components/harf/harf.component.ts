import { Component, OnInit, Input } from "@angular/core";
import { trigger,state, transition, animate, style } from "@angular/animations";

@Component({
  selector: "harf",
  templateUrl: "./harf.component.html",
  styleUrls: ["./harf.component.scss"],
  animations: [
    trigger("rotatedState", [
       transition(":enter", [style({ transform: 'rotateX(0)' }),animate("200ms ease-out", style({ transform: 'rotateX(360deg)' }))]),
       transition(":leave", [animate("200ms ease-in", style({ transform: 'rotateX(360deg)' }))])
     ])
  ]
  
})
export class HarfComponent implements OnInit {
  @Input() deger: string = "";
  @Input() acik: boolean = false;
  constructor() {}

  ngOnInit() {}
}
