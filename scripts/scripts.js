/*
============================================
; Title:  Portfolio Scripts
; File Name: scripts.js
; Author: William Thomason
; Date:   14 March 2019
; Description: Script file for portfolio site
;===========================================
*/

$( document ).ready(function() {

    //call image carousel for bootstrap
    $('.carousel').carousel()


 /* ----------------script for typed.js start --------------------*/
    var typed = new Typed('#typed', {
      strings: ['Web Developer', 'Web Designer', 'Husband &amp; Father', 'Outdoorsman', 'Awesome!!!'],
      typeSpeed: 125,
      backSpeed: 75,
      smartBackspace: true, // this is a default
      loop: true
    });
 /* ----------------script for typed.js end --------------------*/

});
