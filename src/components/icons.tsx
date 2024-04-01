import {Lock, Mail, Notebook, PersonStanding, Plus, User2} from "lucide-react";

export let Icons = {
  plus: Plus,
  personStanding: PersonStanding,
  notebook: Notebook,
  user2: User2,
  mail: Mail,
  lock: Lock,
};

type Icon = keyof typeof Icons;

export function getIcon(type: Icon) {
  return Icons[type] ?? null;
}
