import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'licenseTran'
})
export class LicenseTran implements PipeTransform{
    public transform(value:boolean) :string{
        if(value)
            return "有";
        else
             return "無";
    }
}