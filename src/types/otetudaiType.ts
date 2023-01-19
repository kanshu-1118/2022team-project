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
    1:string;
    2:string;
    3:string;
    4:string;
    5:string;
    6:string;
    7:string;
    8:string;
    9:string;
    10:string;
}
export type colorType = {
    main:string;
    sub:string;
}

export type group = {
    color : colorType[];
    img : string;
    groupName : string;
    categoryAbout : otetudaiType[];
}

export type otetudaiArray = {
    ArrayList : group[];
}