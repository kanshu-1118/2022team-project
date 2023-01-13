// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { otetsudaiType } from '../../src/types/otetsudai';

const KITCHEN_INDEX = 0;
const LIVING_INDEX = 1;
const BATHROOM_INDEX = 2;
const WASHING_INDEX = 3;
const OTHER_INDEX = 4;

export default function otetsudaiApi(
  req: NextApiRequest,
  res: NextApiResponse<otetsudaiType[]>
) {
  res.status(200).json([
    {
      kanji: {
        name: 'お皿を洗う',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おさらをあらう',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'テーブルを拭く',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'テーブルをふく',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: 'お皿を片づける',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おさらをかたづける',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: 'お箸を並べる',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おはしをならべる',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: '食材を切る',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'しょくざいをきる',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: 'テーブルに料理を運ぶ',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'テーブルにりょうりをはこぶ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: 'ご飯を炊く',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'ごはんをたく',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: KITCHEN_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: 'おもちゃを片づける',
        desc: 'おもちゃを片づけてお部屋をきれいにしよう！',
        hint: [
          'おもちゃを元の場所に片づけよう！',
          'おもちゃがこわれないようにやさしく片づけよう！',
        ],
      },
      kana: {
        name: 'おもちゃをかたづける',
        desc: 'おもちゃをかたづけておへやをきれいにしよう！',
        hint: [
          'おもちゃをもとのばしょにかたづけよう！',
          'おもちゃがこわれないようにやさしくかたづけよう！',
        ],
      },
      category: LIVING_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: '植物の水やり',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'しょくぶつのみずやり',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: LIVING_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: '掃除機をかける',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'そうじきをかける',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: LIVING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'ゴミ出し',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'ゴミだし',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: LIVING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'ゴミの分別',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'ゴミのぶんべつ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: LIVING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'お風呂掃除',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おふろそうじ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: BATHROOM_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'トイレ掃除',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'トイレそうじ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: BATHROOM_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'お風呂を沸かす',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おふろをわかす',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: '洗濯をする',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'せんたくをする',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: '洗濯物を干す',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'せんたくものをほす',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: '洗濯物を取り込む',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'せんたくものをとりこむ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: '洗濯物をたたむ',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'せんたくものをたたむ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: '上履きを洗う',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'うわばきをあらう',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: WASHING_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'ペットのお世話',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'ペットのおせわ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: '新聞を取りに行く',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'しんぶんをとりにいく',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'お布団を干す',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おふとんをほす',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 3,
    },
    {
      kanji: {
        name: 'お布団をたたむ',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'おふとんをたたむ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: 'くつならべ',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'くつならべ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 1,
    },
    {
      kanji: {
        name: '郵便物を取りに行く',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'ゆうびんぶつをとりにいく',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 2,
    },
    {
      kanji: {
        name: '玄関のお掃除',
        desc: '説明が入るよ',
        hint: ['ヒント1が入るよ', 'ヒント2が入るよ'],
      },
      kana: {
        name: 'げんかんのおそうじ',
        desc: 'せつめいがはいるよ',
        hint: ['ヒント1がはいるよ', 'ヒント2がはいるよ'],
      },
      category: OTHER_INDEX,
      level: 2,
    },
  ]);
}
