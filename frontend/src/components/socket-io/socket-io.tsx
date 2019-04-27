import { Component, Prop, State } from '@stencil/core';
import io from 'socket.io-client';

@Component({
  tag: 'socket-io',
  styleUrl: 'socket-io.css',
})
export class SocketIo {
  @Prop() channelName: string;
  @Prop() listenOn: string;
  @State() messages: any[] = [];
  @State() hasJoinedChannel = false;

  joinChannel() {
    this.hasJoinedChannel = true;
    const socket = io('http://localhost:8080');
    socket.emit('channel', this.channelName);
    socket.on(this.listenOn, (res) => {
      this.messages = [...this.messages, res];
    });
  }

  render() {
    return (
      <div>
        <div>
          <p>Hello SocketIO!</p>
          {!this.hasJoinedChannel && (
            <button
              onClick={() => {
                this.joinChannel();
              }}>
              Join the {this.channelName} channel!
            </button>
          )}
        </div>

        {this.messages.map((message) => (
          <div>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    );
  }
}
