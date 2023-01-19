import { CateFile, StarFile, otetudaiArray,ImgFile ,colorFile } from "../../src/types/otetudaiType"
import Theme from "../../src/theme"

const StarArray : StarFile = {
    1:"./img/1star.svg",
    2:"./img/2star.svg",
    3:"./img/3star.svg",
}
const CateArray : CateFile = {
    1: "./img/icon_kitchen.svg",
    2: "./img/icon_living.svg",
    3: "./img/icon_bathroom.svg",
    4: "./img/icon_washing.svg",
    5: "./img/icon_other.svg",
}

const ImgArray : ImgFile = {
    1: "./img/cateTitle1.svg",
    2: "./img/cateTitle2.svg",
    3: "./img/cateTitle3.svg",
    4: "./img/cateTitle4.svg",
    5: "./img/cateTitle5.svg",
}

const ColorArray : colorFile = {
    1: "#F2B950",
    2: "#F29A2E",
    3: "#27CFBE",
    4: "#04AFAA",
    5: "#36C8D9",
    6: "#049DD9",
    7: "#F25C5C",
    8: "#EA4242",
    9: "#826AD9",
    10: "#6148BE",
}

const otetudai : otetudaiArray = {
    ArrayList:[
        {
        color : [{
            main:ColorArray[1],
            sub:ColorArray[2],
        }],
        img : "./img/cateTitle1.svg",
        groupName : "キッチン",
        categoryAbout : [{
            categoryName: "お皿を洗う",
            categoryImg: CateArray[1],
            categoryHiragana: "おさらをあらう",
            categoryStar: StarArray[2],
        },{
            categoryName: "お皿を片付ける",
            categoryImg: CateArray[1],
            categoryHiragana: "おさらをかたずける",
            categoryStar: StarArray[1],
        },{
            categoryName: "テーブルを拭く",
            categoryImg: CateArray[1],
            categoryHiragana: "テーブルをふく",
            categoryStar: StarArray[1],
        },{
            categoryName: "お箸を並べる",
            categoryImg: CateArray[1],
            categoryHiragana: "おはしをならべる",
            categoryStar: StarArray[1],
        },{
            categoryName: "食材を切る",
            categoryImg: CateArray[1],
            categoryHiragana: "しょくざいをきる",
            categoryStar: StarArray[1],
        },{
            categoryName: "テーブルに\n料理を運ぶ",
            categoryImg: CateArray[1],
            categoryHiragana: "テーブルにりょうりをはこぶ",
            categoryStar: StarArray[3],
        },{
            categoryName: "ご飯を炊く",
            categoryImg: CateArray[1],
            categoryHiragana: "ごはんをたく",
            categoryStar: StarArray[3],
        },],},
        {
        color : [{
            main:ColorArray[3],
            sub:ColorArray[4],
        }],
        img : "./img/cateTitle2.svg",
        groupName : "リビング",
        categoryAbout : [{
            categoryName: "おもちゃを\n片付ける",
            categoryImg: CateArray[2],
            categoryHiragana: "おもちゃをかたずける",
            categoryStar: StarArray[1],
        },{
            categoryName: "植物の水やり",
            categoryImg: CateArray[2],
            categoryHiragana: "しょくぶつのみずやり",
            categoryStar: StarArray[1],
        },{
            categoryName: "掃除機をかける",
            categoryImg: CateArray[2],
            categoryHiragana: "そうじきをかける",
            categoryStar: StarArray[2],
        },{
            categoryName: "ゴミ出し",
            categoryImg: CateArray[2],
            categoryHiragana: "ごみだし",
            categoryStar: StarArray[2],
        },{
            categoryName: "ゴミの分別",
            categoryImg: CateArray[2],
            categoryHiragana: "ごみのぶんべつ",
            categoryStar: StarArray[2],
        },],},
        {
        color : [{
            main:ColorArray[5],
            sub:ColorArray[6],
        }],
        img : "./img/cateTitle3.svg",
        groupName : "お風呂・トイレ",
        categoryAbout : [{
            categoryName: "お風呂掃除",
            categoryImg: CateArray[3],
            categoryHiragana: "おふろそうじ",
            categoryStar: StarArray[2],
        },{
            categoryName: "トイレ掃除",
            categoryImg: CateArray[3],
            categoryHiragana: "といれそうじ",
            categoryStar: StarArray[2],
        },{
            categoryName: "お風呂を沸かす",
            categoryImg: CateArray[3],
            categoryHiragana: "おふろをわかす",
            categoryStar: StarArray[1],
        },],},
        {
        color : [{
            main:ColorArray[7],
            sub:ColorArray[8],
        }],
        img : "./img/cateTitle4.svg",
        groupName : "お洗濯",
        categoryAbout : [{
            categoryName: "洗濯をする",
            categoryImg: CateArray[4],
            categoryHiragana: "せんたくをする",
            categoryStar: StarArray[3],
        },{
            categoryName: "洗濯物を\n片付ける",
            categoryImg: CateArray[4],
            categoryHiragana: "せんたくものをかたづける",
            categoryStar: StarArray[2],
        },{
            categoryName: "洗濯物を干す",
            categoryImg: CateArray[4],
            categoryHiragana: "せんたくものをほす",
            categoryStar: StarArray[3],
        },{
            categoryName: "洗濯物をたたむ",
            categoryImg: CateArray[4],
            categoryHiragana: "せんたくものをたたむ",
            categoryStar: StarArray[2],
        },{
            categoryName: "洗濯物を\n取り込む",
            categoryImg: CateArray[4],
            categoryHiragana: "せんたくものをとりこむ",
            categoryStar: StarArray[3],
        },{
            categoryName: "上履きを洗う",
            categoryImg: CateArray[4],
            categoryHiragana: "うわばきをあらう",
            categoryStar: StarArray[2],
        },],},
        {
        color : [{
            main:ColorArray[9],
            sub:ColorArray[10],
        }],
        img : "./img/cateTitle5.svg",
        groupName : "その他",
        categoryAbout : [{
            categoryName: "ペットの\nお世話",
            categoryImg: CateArray[5],
            categoryHiragana: "ぺっとのおせわ",
            categoryStar: StarArray[3],
        },{
            categoryName: "新聞を\n取りに行く",
            categoryImg: CateArray[5],
            categoryHiragana: "しんぶんをとりにいく",
            categoryStar: StarArray[2],
        },{
            categoryName: "お布団を干す",
            categoryImg: CateArray[5],
            categoryHiragana: "おふとんをほす",
            categoryStar: StarArray[3],
        },{
            categoryName: "お布団を\nたたむ",
            categoryImg: CateArray[5],
            categoryHiragana: "おふとんをたたむ",
            categoryStar: StarArray[2],
        },{
            categoryName: "くつならべ",
            categoryImg: CateArray[5],
            categoryHiragana: "くつならべ",
            categoryStar: StarArray[1],
        },{
            categoryName: "郵便物を\n撮りに行く",
            categoryImg: CateArray[5],
            categoryHiragana: "ゆうびんぶつをとりにいく",
            categoryStar: StarArray[2],
        },{
            categoryName: "玄関のお掃除",
            categoryImg: CateArray[5],
            categoryHiragana: "げんかんのおそうじ",
            categoryStar: StarArray[2],
        },],},
    ],
    
}

export default otetudai