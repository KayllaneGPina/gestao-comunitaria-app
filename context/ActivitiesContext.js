import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { uuidv4 } from '../utils/uuidFallback';

export const ActivitiesContext = createContext();

const initial = [
  { id: '1', title: 'Mutirão de Limpeza', categories: ['Meio Ambiente'], location: 'Praça Central', date: '2025-09-10', description: 'Ação para limpeza de praças e coleta seletiva.' },
  { id: '2', title: 'Oficina de Orientação Profissional', categories: ['Educação'], location: 'Centro Comunitário', date: '2025-09-15', description: 'Palestras e oficinas sobre mercado de trabalho.' },
  { id: '3', title: 'Campanha de Vacinação', categories: ['Saúde'], location: 'UBS Local', date: '2025-09-20', description: 'Vacinação para adultos e crianças.' }
];

export function ActivitiesProvider({ children }) {
  const [activities, setActivities] = useState(initial);

  function addActivity(activity) {
    const newAct = { ...activity, id: uuidv4() };
    setActivities(prev => [newAct, ...prev]);
    Alert.alert('Sucesso', 'Atividade criada com sucesso!');
  }

  function deleteActivity(id) {
    setActivities(prev => prev.filter(act => act.id !== id));
    Alert.alert('Excluído', 'Atividade removida com sucesso.');
  }

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, deleteActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
}