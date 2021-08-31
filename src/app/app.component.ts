import { Component } from '@angular/core';
import { floor } from './floor.interface';
import { room } from './room.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
public floor: Array<floor> = [{id:'1',name:'Tầng 1'},{id:'2',name:'Tầng 2'},{id:'3',name:'Tầng 3'},{id:'4',name:'Tầng 4'},{id:'5',name:'Tầng 5'},{id:'6',name:'Tầng 6'},{id:'7',name:'Tầng 7'},{id:'8',name:'Tầng 8'},{id:'9',name:'Tầng 9'}]
public room: Array<room> = [{id:'1',name:'Phòng 1'},{id:'2',name:'Phòng 2'},{id:'3',name:'Phòng 3'},{id:'4',name:'Phòng 4'},{id:'5',name:'Phòng 5'},{id:'6',name:'Phòng 6'},{id:'7',name:'Phòng 7'},{id:'8',name:'Phòng 8'},{id:'9',name:'Phòng 9'}]
public floorID: string='';
  title = 'order';
}
