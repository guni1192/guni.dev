export type Event = {
  date: Date,
  body: string
}

export const academicBackGroundData: Event[] =
    [
      {date: new Date('2013-04'), body: '島根県立出雲工業高等学校電気科 入学'},
      {date: new Date('2016-03'), body: '島根県立出雲工業高等学校電気科 卒業'},
      {date: new Date('2016-04'), body: '香川大学工学部 電子・情報工学科 入学'},
      {date: new Date('2020-03'), body: '香川大学工学部 電子・情報工学科 卒業'},
      {
        date: new Date('2020-04'),
        body: '香川大学大学院工学研究科 信頼性情報システム工学専攻 入学'
      },
      {
        date: new Date('2022-03'),
        body: '香川大学大学院工学研究科 信頼性情報システム工学専攻 修了'
      },
    ]

    export const internshipBackGroundData: Event[] = [
      {date: new Date('2018-02'), body: 'GMOペパボ株式会社 福岡支社'},
      {date: new Date('2018-08'), body: '株式会社はてな'},
      {date: new Date('2020-08'), body: 'サイボウズ株式会社'},
      {date: new Date('2020-09'), body: 'ヤフー株式会社'},
    ]
