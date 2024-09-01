import { Ability } from "../Agents.interfaces";

export interface AbilityModalProps {
  open: boolean;
  onCancel: () => void;
  selectedAbility: Ability | null;
}