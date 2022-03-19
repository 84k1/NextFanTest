import { Component, OnInit, ChangeDetectorRef, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {
  loading = false;
  navigationEnd$: Subscription;
  setTitle = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private cdRef: ChangeDetectorRef
  ) {
    this.navigationEnd$ = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log("NavigationEnd")
        this.setTitle = true;
      }
    });

  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.navigationEnd$?.unsubscribe()
  }

}
