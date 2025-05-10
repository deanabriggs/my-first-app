import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector:'app-warning-alert',
    template:`
        <p>Warning! Warning!</p>
    `,
    styles: [
        `
        p {
            padding: 10px;
            background-color: yellow;
            border: 1px solid orange;
        }
        `      
    ]
})
export class WarningAlertComponent {

}