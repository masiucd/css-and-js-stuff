interface Team {
  name: string;
  ultras: string;
  year?: number;
}
// -? remove optional type
// + add type

type ReadOnlyTeam = {
  +readonly [K in keyof Team]-?: Team[K];
};

const pogon: Team = { name: "pogon", ultras: "portowcy" };
const legia: ReadOnlyTeam = { name: "legia", ultras: "zyleta", year: 1916 };

pogon.name = "Pogon";
// legia.name = "Legia";

type A = keyof Team;
