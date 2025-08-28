import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import MultiSelectChips from './MultiSelectChips';

const CATEGORIES = ['Educação', 'Saúde', 'Meio Ambiente', 'Inclusão', 'Cultura'];

export default function ActivityForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setSelected] = useState([]);

  function submit() {
    if (!title.trim()) return alert('Título é obrigatório.');
    onSubmit({ title: title.trim(), location: location.trim() || 'Local não informado', description: description.trim(), categories: selected, date: '' });
    setTitle(''); setLocation(''); setDescription(''); setSelected([]);
  }

  return (
    <View>
      <Text style={styles.label}>Título</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Nome da atividade" />
      <Text style={styles.label}>Local</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Ex: Escola Municipal" />
      <Text style={styles.label}>Descrição</Text>
      <TextInput style={[styles.input, { height: 90 }]} multiline value={description} onChangeText={setDescription} placeholder="Detalhes da atividade" />
      <Text style={styles.label}>Categorias</Text>
      <MultiSelectChips options={CATEGORIES} selected={selected} onChange={setSelected} />
      <Pressable style={styles.btn} onPress={submit}><Text style={styles.btnText}>Salvar Atividade</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: '700', marginTop: 8, color: '#0f172a' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginTop: 6, borderWidth: 1, borderColor: '#e6eef0' },
  btn: { backgroundColor: '#0ea5a4', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 12 },
  btnText: { color: '#fff', fontWeight: '700' }
});