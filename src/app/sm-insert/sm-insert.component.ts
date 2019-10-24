import { Component, OnInit, Input } from '@angular/core';
import { SM, SMEmptyObject } from '../sm/sm.model';
import { SMService } from '../sm/sm.service';

@Component({
  selector: 'app-sm-insert',
  templateUrl: './sm-insert.component.html',
  providers: [SMService],
  styleUrls: ['./sm-insert.component.css']
})
export class SmInsertComponent implements OnInit {
  
  @Input()
  sm : SM;
  constructor(private service:SMService) { }

  ngOnInit() {
    this.sm = new SMEmptyObject();
  }

  onSubmit(){
    this.service.insertSM(this.sm).subscribe(data=>{ let text = "新增失敗";
                                                    if(data){text="新增成功";}
                                                    alert(text);
                                                  });
  }

}
