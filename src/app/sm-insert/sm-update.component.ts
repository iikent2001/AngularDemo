import { Component, OnInit, Input } from '@angular/core';
import { SM, SMEmptyObject } from '../sm/sm.model';
import { SMService } from '../sm/sm.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sm-update',
    templateUrl: './sm-insert.component.html',
    providers: [SMService],
    styleUrls: ['./sm-insert.component.css']
})
export class SmUpdateComponent implements OnInit {

    sm : SM;
    constructor(private service:SMService,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.sm = new SMEmptyObject();
      this.service.searchSMId(this.route.snapshot.paramMap.get('seq')).subscribe(data => this.sm = data);
    }
  
    onSubmit(){
      this.service.insertSM(this.sm).subscribe(data=>{ let text = "修改失敗";
                                                      if(data){text="修改成功";}
                                                      alert(text);
                                                    });
    }
  }
  