import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';
import AnimatedCard from '../components/AnimatedCard';

export default function ActivityDetails({ route, navigation }) {
  const { item } = route.params ?? { item: { title: '—', description: '', categories: [], location: '-' } };
  const { deleteActivity } = useContext(ActivitiesContext);

  function handleDelete() {
    Alert.alert('Confirmar', 'Deseja excluir esta atividade?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => {
          deleteActivity(item.id);
          navigation.goBack();
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{item.location} • {item.date || 'Data a definir'}</Text>
      <View style={styles.tags}>{item.categories.map(c => <View key={c} style={styles.tag}><Text style={styles.tagText}>{c}</Text></View>)}</View>
      <Text style={styles.desc}>{item.description}</Text>

      <AnimatedCard title="Como participar?" subtitle="Entre em contato com a coordenação local para participar como voluntário." />
      <Pressable style={styles.btn}><Text style={styles.btnText}>Quero ser voluntário</Text></Pressable>
      <Pressable style={[styles.btn, styles.deleteBtn]} onPress={handleDelete}>
        <Text style={styles.btnText}>Excluir Atividade</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '800', color: '#064e3b' },
  meta: { color: '#475569', marginTop: 4 },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginVertical: 8 },
  tag: { backgroundColor: '#ecfeff', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 999 },
  tagText: { color: '#065f52', fontWeight: '700', fontSize: 12 },
  desc: { marginTop: 8, color: '#334155' },
  btn: { marginTop: 12, backgroundColor: '#0ea5a4', padding: 12, borderRadius: 10, alignItems: 'center' },
  deleteBtn: { backgroundColor: '#dc2626' },
  btnText: { color: '#fff', fontWeight: '700' }
});