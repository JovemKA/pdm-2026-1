import { AppSetting, QuickAction, StatusBadge } from '../types';

export const noticeMessage =
  'Explore os componentes, altere estilos e combine com suas regras de negocio.';

export const quickActions: QuickAction[] = [
  {
    id: 'new-task',
    label: 'Nova tarefa',
    type: 'primary',
  },
  {
    id: 'review',
    label: 'Revisar',
    type: 'warning',
  },
  {
    id: 'export',
    label: 'Exportar',
    type: 'ghost',
  },
];

export const appSettings: AppSetting[] = [
  {
    id: 'notifications',
    label: 'Notificacoes',
    enabled: true,
  },
  {
    id: 'sync',
    label: 'Sincronizacao automatica',
    enabled: false,
  },
];

export const statusBadges: StatusBadge[] = [
  {
    id: 'notifications-status',
    settingId: 'notifications',
    label: 'Status notificacoes',
    activeLabel: 'ON',
    inactiveLabel: 'OFF',
  },
  {
    id: 'sync-status',
    settingId: 'sync',
    label: 'Status sincronizacao',
    activeLabel: 'ATIVA',
    inactiveLabel: 'INATIVA',
  },
];
