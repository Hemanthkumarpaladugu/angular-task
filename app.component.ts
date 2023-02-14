import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userlist:any = []

  onclick(prouser:any){
    console.log(prouser.value)
    if(prouser.value.length > 0){
      this.userlist.push(prouser.value)
      prouser.value = ""
    }
  }
  ondelete(){
    this.userlist.pop()
  }
  
}
