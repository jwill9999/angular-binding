

import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

// Here we set up an emitter and **output()** it so others can listen
//remember to add import!
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
@Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }
//This emitter is broadcast on say a click event when this function is called
//Its passes an object which maps data to the listening component
  onAddServer(){
      this.serverCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint(){
     this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });

  }



}
