import { Component } from '@angular/core';

@Component({
    selector: 'read-more',
    templateUrl: './read-more.component.html',
    styleUrls: ['./read-more.component.css']
})



export class ReadMoreComponent {
    isCollapsed = true;

    buttonText(): string{
        if(this.isCollapsed){
            return "Read More"
        }
        return "Read Less";
    }   
}