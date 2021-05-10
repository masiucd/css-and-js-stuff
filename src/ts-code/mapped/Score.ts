type Score = {
  x: number
  y: number
}

type ImmutableScore = Readonly<Score>

type ImmutableScore2 = {
  readonly [key in keyof Score]: number
}

type ImmutableType<T> = {
  readonly [key in keyof T]: T[key]
}

const score: ImmutableType<Score> = {
  x: 22,
  y: 323,
}

score.x = 5555
