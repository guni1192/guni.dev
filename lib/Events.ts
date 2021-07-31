export type Event = {
  id: number
  date: Date,
  body: string
}

export const events: Event[]= [
  { id: 1, date: new Date('2013-04'), body: "島根県立出雲工業高等学校電気科 入学"},
  { id: 2, date: new Date('2016-03'), body: "島根県立出雲工業高等学校電気科 卒業"},
  { id: 3, date: new Date('2016-04'), body: "香川大学工学部 入学"},
  { id: 4, date: new Date('2020-03'), body: "香川大学工学部 卒業"},
  { id: 5, date: new Date('2020-04'), body: "香川大学大学院工学研究科 入学"},
  { id: 6, date: new Date(),          body: "香川大学大学院工学研究科 在学中"},
]
