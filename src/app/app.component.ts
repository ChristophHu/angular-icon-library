import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  alphabetical: boolean = false
  icons: string[] = [
    '2fa', 'add', 'adjustment', 'alert-circle', 'alert-triangle', 'arrow-back-up', 'arrows-expand', 'arrow-left', 'arrow-right', 'bell', 'bordbuch', 'calendar-event', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'clock', 'cursor', 'edit', 'dashboard', 'dots', 'dots-horizontal', 'dots-vertical', 'download', 'drag-n-drop', 'drag-n-drop-click', 'exclamation', 'eye', 'eye-off', 'file-info', 'filter', 'location-marker', 'location-add', 'logout', 'logo-or', 'map', 'map-pins', 'mail', 'menu', 'menu-alt-2', 'menu-off', 'messages', 'notification', 'qrcode', 'question-mark', 'question-mark-round', 'refresh', 'scan', 'search', 'security', 'settings', 'ship', 'table', 'trash', 'user', 'users', 'x'
  ]

  letter_a: string[] = ['add', 'adjustment', 'alert-circle', 'alert-triangle', 'arrow-back-up', 'arrows-expand', 'arrow-left', 'arrow-right']
  letter_b: string[] = ['bell']
  letter_c: string[] = ['calendar-event', 'check', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'clock', 'cursor']
  letter_d: string[] = ['dashboard', 'dots', 'dots-horizontal', 'dots-vertical', 'download', 'drag-n-drop', 'drag-n-drop-click']
  letter_e: string[] = ['exclamation', 'eye', 'eye-off']
  letter_f: string[] = ['file-info', 'filter']
  letter_g: string[] = []
  letter_h: string[] = []
  letter_i: string[] = []
  letter_j: string[] = []
  letter_k: string[] = []
  letter_l: string[] = ['location-marker', 'location-add', 'logout']
  letter_m: string[] = ['map', 'map-pins', 'mail', 'menu', 'menu-alt-2', 'menu-off', 'messages']
  letter_n: string[] = ['notification']
  letter_o: string[] = []
  letter_p: string[] = []
  letter_q: string[] = ['qrcode', 'question-mark', 'question-mark-round']
  letter_r: string[] = ['refresh']
  letter_s: string[] = ['scan', 'search', 'security', 'settings', 'ship']
  letter_t: string[] = ['table', 'trash']
  letter_u: string[] = ['user', 'users']
  letter_v: string[] = []
  letter_w: string[] = []
  letter_x: string[] = ['x']
  letter_y: string[] = []
  letter_z: string[] = []

  numbers: string[] = ['2fa']
  letters: any[] = [
    { char: 'A', icons: this.letter_a },
    { char: 'B', icons: this.letter_b },
    { char: 'C', icons: this.letter_c },
    { char: 'D', icons: this.letter_d },
    { char: 'E', icons: this.letter_e },
    { char: 'F', icons: this.letter_f },
    { char: 'L', icons: this.letter_l },
    { char: 'M', icons: this.letter_m },
    { char: 'N', icons: this.letter_n },
    { char: 'Q', icons: this.letter_q },
    { char: 'R', icons: this.letter_r },
    { char: 'S', icons: this.letter_s },
    { char: 'T', icons: this.letter_t },
    { char: 'U', icons: this.letter_u },
    { char: 'X', icons: this.letter_x }
  ]
}
