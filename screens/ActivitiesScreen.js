import React, { useContext, useMemo, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';
import MultiSelectChips from '../components/MultiSelectChips';

export default function ActivitiesScreen({ navigation }) {
  const { activities } = useContext(ActivitiesContext);
  const [selected, setSelected] = useState([]);
  const ALL_CATEGORIES = ['Educação', 'Saúde', 'Meio Ambiente', 'Inclusão', 'Cultura'];

  const filtered = useMemo(() => {
    if (selected.length === 0) return activities;
    return activities.filter(a => selected.every(s => a.categories.includes(s)));
  }, [activities, selected]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atividades</Text>
      <MultiSelectChips options={ALL_CATEGORIES} selected={selected} onChange={setSelected} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 8, gap: 8 }}
        renderItem={({ item }) => (
          <Pressable style={styles.card} onPress={() => navigation.navigate('Detalhes', { item })}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.location} • {item.date || 'Data a definir'}</Text>
            <View style={styles.tags}>
              {item.categories.map(c => <View key={c} style={styles.tag}><Text style={styles.tagText}>{c}</Text></View>)}
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: '800', marginBottom: 8, color: '#064e3b' },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 12, marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  cardSub: { color: '#475569', marginTop: 4 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8 },
  tag: { backgroundColor: '#e6fffa', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999 },
  tagText: { color: '#065f52', fontWeight: '700', fontSize: 12 }
});