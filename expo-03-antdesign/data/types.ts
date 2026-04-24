export type QuickActionType = 'primary' | 'warning' | 'ghost';

export interface QuickAction {
  id: string;
  label: string;
  type: QuickActionType;
}

export interface AppSetting {
  id: string;
  label: string;
  enabled: boolean;
}

export interface StatusBadge {
  id: string;
  settingId: string;
  label: string;
  activeLabel: string;
  inactiveLabel: string;
}

export interface TaskItem {
  id: string;
  title: string;
  done: boolean;
  priority: 'baixa' | 'media' | 'alta';
  dueDate: string;
}

export interface UserSummary {
  id: string;
  name: string;
  role: string;
  team: string;
}
