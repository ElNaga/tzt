import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PlatformService } from '../../services/platfrom.service';
// import { image1 } from '../../../assets/images/images/teatar3.jpg'

// src = "/assets/images/img/1.jpg"

interface Slide {
  title: string;
  date: string;
  tagLine: string;
  imageUrl: string;
}

interface Stat {
  percent: string;
  label: string;
}

interface Service {
  title: string;
  description: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  slides: Slide[] = [
    {
      title: '„Лупка и Љубица“',
      date: '06.04.2025, 11:00',
      tagLine: 'Интерактивна детска претстава',
      imageUrl: '/assets/images/teatar-1.webp'
    },
    {
      title: '„Изгубените подароци“',
      date: '13.04.2025, 12:00',
      tagLine: 'Роденденско шоу за најмладите',
      imageUrl: '/assets/images/teatar-2.jfif'
    },
    {
      title: '„Суперхеројски роденден“',
      date: '30.03.2025, 11:00',
      tagLine: 'Игри, музика, анимација',
      imageUrl: '/assets/images/teatar-3.jpg'
    },
    {
      title: '„Работилница на зајакот Зозо“',
      date: '23.02.2025, 13:00',
      tagLine: 'Креативен Easter workshop за деца',
      imageUrl: '/assets/images/sedishta-1.jpg'
    },
  ];
  currentSlide = 0;

  stats: Stat[] = [
    { percent: '95%', label: 'Деца кои препорачуваат' },
    { percent: '85%', label: 'Роденденски пакети распродадени' },
    { percent: '90%', label: 'Работилници исполнети до максимум' },
  ];

  services: Service[] = [
    {
      title: 'Роденденски пакети',
      description: 'Креативни анимации, тематски игри и професионални аниматори.',
      route: '/events'
    },
    {
      title: 'Театарски претстави',
      description: 'Интерактивни сценски приказни за најмалите.',
      route: '/events'
    },
    {
      title: 'Креативни работилници',
      description: 'Ликовна и градежна работилница, правење маски и костими.',
      route: '/workshops'
    },
  ];

  testimonial = {
    quote: 'Ги носиме децата на сите ваши претстави – секогаш сме воодушевени! Најдоброто роденденско изненадување!',
    author: 'Марија Николовска'
  };

  constructor(private readonly platformService: PlatformService) {

  }

  ngOnInit() {
    this.platformService.isBrowser() && this.ChangeCarouselItem();
  }

  testClick() { console.log('🌟 testClick fired!'); }


  ChangeSlide(delta: number) {
    const len = this.slides.length;
    this.currentSlide = ((this.currentSlide + delta) % len + len) % len;
  }

  private ChangeCarouselItem() {
    if (!this.slides?.length) return;

    setTimeout(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.ChangeCarouselItem();
    }, 5000);
  }
}
