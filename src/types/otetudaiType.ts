export type CateFile = {
    1:string;
    2:string;
    3:string;
    4:string;
    5:string;
}

export type ImgFile = {
    1:string;
    2:string;
    3:string;
    4:string;
    5:string;
}

export type StarFile = {
    1:string;
    2:string;
    3:string;
}

export type otetudaiType = {
    categoryName : string;
    categoryImg : string;
    categoryHiragana : string;
    categoryStar : string;
}

export type colorFile = {

}

export type group = {
    color : string
    img : string;
    groupName : string;
    categoryAbout : otetudaiType[];
}

export type otetudaiArray = {
    ArrayList : group[];
}