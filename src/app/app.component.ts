import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MessageService } from './services/message.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  form: FormGroup;
  messages: string[] = [];

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private socketService: SocketService) {
    this.form = this.formBuilder.group({
      message: ''
    })
  }

  ngOnInit() {
    this.socketService.getMessages().subscribe((message: any) => {
      console.log('Mensagem recebida via WebSocket:', message);  
      this.messages.push(message);  
    });
  }
  
  
  submit() {
    const data = this.form.getRawValue(); 
    this.socketService.sendMessage(data.message);
  }
}
