export type PortfolioGet = {
    id:number;
    symbol:string;
    companyName:string;
    purchase:number;
    lastDiv:number;
    industry:string;
    marketCap:number;
    comments:any;
}

export type PortfolioPost = {  //note i am useing this same type for my delete so i did not bother too create a delete type {Services}
    symbol:string;
}