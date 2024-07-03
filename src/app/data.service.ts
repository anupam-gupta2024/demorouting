import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["LAVISH KUMAR", "10419", "lk@test.com"]
  info2: string[] = ["FARHAN IMRANBHAI GANCHI", "10438", "fig@test.com"]
  info3: string[] = ["JAHNVI", "10423", "jv@test.com"]

  getInfo1(): string[] {
    return this.info1
  }

  getInfo2(): string[] {
    return this.info2
  }

  getInfo3(): string[] {
    return this.info3
  }

  addInfo(info) {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)

    return this.info1
  }


  constructor() { }
}
