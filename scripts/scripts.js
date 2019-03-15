/*
============================================
; Title:  Portfolio Scripts
; File Name: scripts.js
; Author: William Thomason
; Date:   14 March 2019
; Description: Script file for portfolio site
;===========================================
*/

//call image carousel for bootstrap
$('.carousel').carousel()

/* Smooth scrolling */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 /* Smooth scrolling ends */

