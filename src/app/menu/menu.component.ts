import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items=['Home','Workflow', 'Statistics' , 'Calendar' , 'Users' , 'Settings'];
  selected_item:string = this.items[0];
  constructor() { }

  ngOnInit() {
  	
  }

  getSelectedPage(item){
  	this.selected_item = item; 
  	
  }
  openMenu(){
  	
  }

}
