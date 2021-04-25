import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})

export class ServersComponent implements OnInit {
  username = '';
  isClicked= false;
  servers = ['Testserver', 'Testserver 2'];

  ngOnInit() {}

  onUserClick(){
    this.servers.push(this.username);
    this.isClicked = true;
  }
}

// 1-add input field which updates a property ('username') via two way binding