export enum EvolutionTrigger {
  'level-up' = 'Lvl',
  trade = 'Trade',
  'use-item' = 'Use',
  other = 'Other',
}

export enum EvolutionTriggerReason {
  levelUp = 'level-up',
  trade = 'trade',
  useItem = 'use-item',
  other = 'other',
}

export const getEvolutionTrigger = (trigger: string) => {
  return EvolutionTrigger[trigger as keyof typeof EvolutionTrigger];
};

export const getEvolutionValue = (trigger: string, evolutionDetail: any) => {
  if (evolutionDetail.min_happiness) {
    return `Happiness ${evolutionDetail.min_happiness}`;
  }

  switch (trigger) {
    case EvolutionTriggerReason.levelUp:
      return `Lvl ${evolutionDetail.min_level}`;
    case EvolutionTriggerReason.trade:
      return '';
    case EvolutionTriggerReason.useItem:
      return `Use ${evolutionDetail.item?.name.replace('-', ' ') || ''}`;
    case EvolutionTriggerReason.other:
      return 'Other';
    default:
      return '';
  }
};
