import { TaskItem } from '../types';

export const tasksMock: TaskItem[] = [
  {
    id: 'task-1',
    title: 'Montar prototipo de tela inicial',
    done: false,
    priority: 'alta',
    dueDate: '2026-04-30',
  },
  {
    id: 'task-2',
    title: 'Validar componentes do formulario',
    done: true,
    priority: 'media',
    dueDate: '2026-05-02',
  },
  {
    id: 'task-3',
    title: 'Preparar roteiro de demonstracao',
    done: false,
    priority: 'baixa',
    dueDate: '2026-05-05',
  },
];
