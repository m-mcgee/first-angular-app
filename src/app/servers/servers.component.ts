import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreatedStatus= 'No Server Created';
  serverName=""

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreatedStatus = 'Server Created: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
