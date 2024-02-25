import {Plus} from "lucide-react";

export let Icons = {
  plus: Plus,
};

type Icon = keyof typeof Icons;

export function getIcon(type: Icon) {
  return Icons[type] ?? null;
}
