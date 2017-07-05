export interface Bridge {
    abs: string;
    walker();
}

export class Group {

    size(): number | boolean {
        return true;
    }
}

export interface Mouse {
    [key: string]: { [key: string]: number} | (() => number) ;
}

let a : Mouse = {
    abn : { kk : 10},
    func: ()=> {
        return 10;
    },
    gte () {
        return 1;
    }
} 
