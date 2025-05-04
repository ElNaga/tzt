import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { RouterLink }                    from '@angular/router';

interface Slide {
  title: string;
  date:  string;
  tagLine: string;
}

interface Stat {
  percent: string;
  label:   string;
}

interface Service {
  title:       string;
  description: string;
  route:       string;
}

@Component({
  standalone:  true,
  imports:     [CommonModule, RouterLink],
  selector:    'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    { title: '„Лупка и Љубица“',       date: '06.04.2025, 11:00', tagLine: 'Интерактивна детска претстава' },
    { title: '„Изгубените подароци“',  date: '13.04.2025, 12:00', tagLine: 'Роденденско шоу за најмладите' },
    { title: '„Суперхеројски роденден“', date: '30.03.2025, 11:00', tagLine: 'Вклучува игри, музика, анимација' },
    { title: '„Работилница на зајакот Зозо“', date: '23.02.2025, 13:00', tagLine: 'Креативен Easter workshop за деца' },
  ];
  currentSlide = 0;

  stats: Stat[] = [
    { percent: '95%', label: 'Деца кои препорачуваат' },
    { percent: '85%', label: 'Роденденски пакети распродадени' },
    { percent: '90%', label: 'Работилници исполнети до максимум' },
  ];

  services: Service[] = [
    {
      title:       'Роденденски пакети',
      description: 'Креативни анимации, тематски игри и професионални аниматори.',
      route:       '/events'
    },
    {
      title:       'Театарски претстави',
      description: 'Интерактивни сценски приказни за најмалите.',
      route:       '/events'
    },
    {
      title:       'Креативни работилници',
      description: 'Ликовна и градежна работилница, правење маски и костими.',
      route:       '/workshops'
    },
  ];

  testimonial = {
    quote:  'Ги носиме децата на сите ваши претстави – секогаш сме воодушевени! Најдоброто роденденско изненадување!',
    author: 'Марија Николовска'
  };

  private intervalId?: number;

  ngOnInit() {
    // auto-rotate carousel every 5s
    this.intervalId = window.setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
