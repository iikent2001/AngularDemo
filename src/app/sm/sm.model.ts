export class SM{
    seq:string;
    id: string; 
    name: string; 
    echelon: string; 
    birth: string; 
    phone: string; 
    eduLevel: string; 
    license: boolean | string;
    country: string;

}

export class SMEmptyObject extends SM{


    constructor(seq?){
        super();
        this.seq=seq?seq:'';
        this.id='';
        this.name='';
        this.echelon='';
        this.birth='';
        this.phone='';
        this.eduLevel='';
        this.license='';
        this.country='';
    }
}