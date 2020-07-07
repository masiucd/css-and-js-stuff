interface Team {
  name: string;
  ultras: string;
}

const teams: Record<string, Team> = {
  legia: {
    name: 'Legia Warszawa',
    ultras: 'Zyleta',
  },
  pogon: {
    name: 'Pogon Szeczin',
    ultras: 'Portowcy',
  },
  ifk: {
    name: 'Ifk GBG',
    ultras: 'Anglarna',
  },
};

export async function getUserDetails(handle: string) {
  return new Promise<Team>((resolve) => {
    setTimeout(() => {
      resolve(teams[handle]);
    }, 2000);
  });
}
