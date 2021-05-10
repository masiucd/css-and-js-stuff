import { getUserDetails } from './getUser.ts';

async function main() {
  const handles = ['legia', 'pogon', 'ifk'];
  let team;
  for (let handle of handles) {
    team = await getUserDetails(handle);
    // console.log("Team name :", team.name, "Team Ultras ", team.ultras);
  }
}

main();

export { main };
