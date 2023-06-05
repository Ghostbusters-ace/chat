import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public users: number = 0;
  public message: string = '';
  public messages: string[] = [];

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    this._chatService.receiveChat().subscribe((message: any) => {
      this.messages.push(message);
    });
    this._chatService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  addChat() {
    this.messages.push(this.message);
    this._chatService.sendChat(this.message);
    this.message = '';
  }
}
