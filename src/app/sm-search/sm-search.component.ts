import { Component, OnInit } from '@angular/core';
import { SM, SMEmptyObject } from '../sm/sm.model';
import { SMService } from '../sm/sm.service';

@Component({
  selector: 'app-sm-search',
  templateUrl: './sm-search.component.html',
  styleUrls: ['./sm-search.component.css']
})
export class SmSearchComponent implements OnInit {

  datas ;

  sm : SM = new SMEmptyObject();
  constructor(private service:SMService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.service.getSMs(this.sm).subscribe(data => this.datas = data);
  }

  edit(data : SM){
    console.log(data);
  }

  delete(data : SM){
   this.service.deleteSM(data).subscribe(data=>{if(data){alert("success")}});
   this.service.getSMs(this.sm).subscribe(data => this.datas = data);
  }

}
