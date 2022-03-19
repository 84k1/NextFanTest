import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicComponent implements OnInit, AfterViewChecked {

  constructor() {

  }

  ngOnInit() { }

  ngAfterViewChecked() {
  }
}
