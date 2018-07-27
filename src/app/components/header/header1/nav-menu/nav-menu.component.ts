import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    (function(){
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').on("click", function(){
        $(this).toggleClass('open');
        $(this).siblings(".nav-menu").toggleClass("active");
      });

      $(".add-dropdown .dropdown-menu a").on("mouseover", function(e){
        var $this = $(this);
        $this.siblings(".list-item-screen").children("[ class^='list-item-screen-']").addClass("d-none");
        $this.siblings(".list-item-screen").children(".list-item-screen-"+ $this.attr("data-screen")).removeClass("d-none");
        $this.parent().children().removeClass("active");
        $this.addClass("active");
        // e.target.classList.toggle("active");
      });
    })();
  }
}
