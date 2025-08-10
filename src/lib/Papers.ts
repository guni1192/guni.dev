export type Paper = {
  title: string,
  authors: string[],
  conference?: string|undefined,
}

export const papersData: Paper[] = [
  {
    title: 'コンテナの隔離を強化するサンドボックス機構の提案',
    authors: ['飯國隆志', '最所圭三'],
    conference: '第82回情報処理学会全国大会',
  },
  {
    title:
        'Sprofiler: ワークロードにフィットしたコンテナのSeccompルール生成システムの開発と評価',
    authors: ['飯國隆志', '最所圭三'],
    conference: '第152回システムソフトウェアとオペレーティング・システム研究会',
  },
  {
    title:
        'Sprofiler: Automatic Generating System of Container-Native System Call Filtering Rules for Attack Surface Reduction',
    authors: ['Takashi Iiguni', 'Hitoshi Kamei', 'Keizo Saisho'],
    conference:
        'The 2021 International Conference on Computational Science and Computational Intelligence (CSCI 21)',
  },
]
