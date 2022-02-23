import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationArrow, faEnvelope, faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  slug:string = '';
  activeNav(){
    setTimeout(() => {
      this.slug =  window.location.href;
      console.log(this.slug ,this.slug.endsWith('/'))
    }, 100);
  }
  constructor() {
    this.activeNav();
  }
  // Brands Icons
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;

  // Solid Icons
  faPhone = faPhone;
  faLocationArrow = faLocationArrow;
  faBars = faBars;
  faEllipsisV = faEllipsisV




  active:boolean = false;
  navFix:boolean =false;
  subNav:boolean = false;
  @HostListener('window:scroll', ['$event'])
  navbarFix(){
    if(window.pageYOffset > 95){
      this.navFix = true;
    }
    else if(window.pageYOffset < 95){
      this.navFix = false;
    }
  }
  toggleSubNav():void{
    this.subNav = !this.subNav;
  }
  toggleNav():void{
    this.active = !this.active;
  }

  ngOnInit(): void {
  }

  // To Close all popups like navbar and header content
  id(e:any){
    console.log(e.target.id)
    if(e.target.id === 'header' || e.target.id === 'navbar'){
      console.log(false);
      return false;
    }
    else{
      console.log(true);
      return true;
    }
  }
  closeAll(e:any){
    if(this.id(e)){
      this.active = false;
      this.subNav = false;
    }
  }


}
