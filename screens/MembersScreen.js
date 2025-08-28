import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AnimatedCard from '../components/AnimatedCard';

const MEMBERS = [
  { id: 'm1', name: 'Ana Silva', role: 'Coordenadora' },
  { id: 'm2', name: 'João Pereira', role: 'Voluntário' },
  { id: 'm3', name: 'Maria Oliveira', role: 'Comunicação' }
];

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Membros</Text>
      <FlatList data={MEMBERS} keyExtractor={m => m.id} renderItem={({ item }) => (
        <AnimatedCard title={item.name} subtitle={item.role} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '800', color: '#064e3b', marginBottom: 8 }
});