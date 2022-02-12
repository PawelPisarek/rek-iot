import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() {}

  getDevices() {
    return [
      {
        title: 'drukarka termiczna',
        data: [{ type: 'warn', description: 'niski stan papieru' }]
      },
      { title: 'terminal płatniczy', data: [] },
      { title: 'czytnik kodów QR', data: [] }
    ];
  }

  mcu() {
    return [{ title: 'cpu', data: [] }];
  }
}
