import  { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Add when this is a standalone component

@Component({
    standalone: false,
    selector: 'app-server',
    templateUrl: './server.component.html',
    // imports: [CommonModule], // Add when this is a standalone component
    styles: [`
        .online {
            color: white;
        }`]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    // define a method
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}