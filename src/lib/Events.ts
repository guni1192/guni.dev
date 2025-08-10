export class Event {
  startDate: Date;
  endDate: Date | null;
  name: string;
  body: string;

  constructor(startDate: string, endDate: string | null, name: string, body?: string) {
    this.startDate = new Date(startDate);
    if (endDate === null) {
      this.endDate = null;
    } else {
      this.endDate = new Date(endDate);
    }
    this.name = name
    this.body = body ?? '';
  }
}

export const backgroundData: Event[] =
    [
      new Event('2016-04', '2020-03', 'Kagawa University, Faculty of Engineering, Electronics and Information Engineering', 'Saisho Laboratory'),
      new Event('2020-04', '2022-03', 'Kagawa University, Faculty of Engineering, Division of Reliability-based Information Systems Engineering', 'Saisho Laboratory'),
      new Event('2022-04', '2023-12', 'NTT Communications', 'Software Engineer (Backend)'),
      new Event('2024-01', null, 'Ubie, inc.', 'Software Engineer (SRE)'),
    ]
