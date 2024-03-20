import {PersonStanding, Plus} from "lucide-react";

export let Icons = {
  plus: Plus,
  personStanding: PersonStanding,
};

type Icon = keyof typeof Icons;

export function getIcon(type: Icon) {
  return Icons[type] ?? null;
}
