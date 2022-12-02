// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { otetsudaiType } from '../../src/types/otetsudai';

export default function otetsudaiApi(
  req: NextApiRequest,
  res: NextApiResponse<otetsudaiType[]>
) {
  res.status(200).json([
    {
      name: 'お皿を洗う',
      category: 'kitchen',
      level: 2,
    },
    {
      name: 'テーブルを拭く',
      category: 'kitchen',
      level: 1,
    },
    {
      name: 'お皿を片付ける',
      category: 'kitchen',
      level: 1,
    },
    {
      name: 'お箸を並べる',
      category: 'kitchen',
      level: 1,
    },
    {
      name: '食材を切る',
      category: 'kitchen',
      level: 1,
    },
    {
      name: 'テーブルに料理を運ぶ',
      category: 'kitchen',
      level: 3,
    },
    {
      name: 'ご飯を炊く',
      category: 'kitchen',
      level: 3,
    },
    {
      name: 'おもちゃを片付ける',
      category: 'living',
      level: 1,
    },
    {
      name: '植物の水やり',
      category: 'living',
      level: 1,
    },
    {
      name: '掃除機をかける',
      category: 'living',
      level: 2,
    },
    {
      name: 'ゴミ出し',
      category: 'living',
      level: 2,
    },
    {
      name: 'ゴミの分別',
      category: 'living',
      level: 2,
    },
    {
      name: 'お風呂掃除',
      category: 'bathroom',
      level: 2,
    },
    {
      name: 'トイレ掃除',
      category: 'bathroom',
      level: 2,
    },
    {
      name: 'お風呂を沸かす',
      category: 'washing',
      level: 2,
    },
    {
      name: '洗濯をする',
      category: 'washing',
      level: 3,
    },
    {
      name: '洗濯物を干す',
      category: 'washing',
      level: 3,
    },
    {
      name: '洗濯物を取り込む',
      category: 'washing',
      level: 3,
    },
    {
      name: '洗濯物をたたむ',
      category: 'washing',
      level: 2,
    },
    {
      name: '上履きを洗う',
      category: 'washing',
      level: 2,
    },
    {
      name: 'ペットのお世話',
      category: 'other',
      level: 3,
    },
    {
      name: '新聞を取りに行く',
      category: 'other',
      level: 2,
    },
    {
      name: 'お布団を干す',
      category: 'other',
      level: 3,
    },
    {
      name: 'お布団をたたむ',
      category: 'other',
      level: 2,
    },
    {
      name: 'くつならべ',
      category: 'other',
      level: 1,
    },
    {
      name: '郵便物を取りに行く',
      category: 'other',
      level: 2,
    },
    {
      name: '玄関のお掃除',
      category: 'other',
      level: 2,
    },
  ]);
}
