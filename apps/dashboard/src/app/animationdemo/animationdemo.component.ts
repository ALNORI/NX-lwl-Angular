import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state(
        'initial',
        style({
          backgroundColor: 'green',
          width: '100px',
          height: '100px'
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'red',
          width: '200px',
          height: '200px',

        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),

    trigger('balloonEffect', [
      state(
        'initial',
        style({
          background: 'URL(null)',
          backgroundColor: 'null',
          //transform: 'scale(0.2)'
          transform: "translate(0px, 0px)"
        })
      ),
      state(
        'final',
        style({
          background: 'URL(null)',
          backgroundColor: 'null',
          //transform: 'scale(1.5)',
          transform: "translate(0px, 0px) scale(0.2)"
        })
      ),
      transition('final<=>initial', animate('1500ms')),
     // transition('initial=>final', animate('1500ms'))
    ]),

    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0
        })
      ),
      transition('void <=> *', animate(1000))
    ]),

    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AnimationdemoComponent {
  currentState = 'initial';
  listItem = [];
  list_order = 1;

  addItem() {
    // tslint:disable-next-line:prefer-const
    const listitem = 'ListItem ' + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
