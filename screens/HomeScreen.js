import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AnimatedCard from '../components/AnimatedCard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema de Gestão Comunitária</Text>
      <Text style={styles.subtitle}>Ferramenta simples para gerenciar atividades, voluntários e ações da sua associação ou ONG.</Text>

      <Pressable style={styles.cta} onPress={() => navigation.navigate('Atividades')} >
        <Text style={styles.ctaText}>Ver Atividades</Text>
      </Pressable>

      <Pressable style={[styles.cta, { backgroundColor: '#059669' }]} onPress={() => navigation.navigate('NovaAtividade')} >
        <Text style={styles.ctaText}>Criar Nova Atividade</Text>
      </Pressable>

      <AnimatedCard title="Objetivo" subtitle="Facilitar o cadastro e organização de ações comunitárias" />
      <AnimatedCard title="Recursos" subtitle="Lista de atividades, filtros multisseleção, cadastro local e telas de detalhe." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 22, fontWeight: '800', color: '#064e3b' },
  subtitle: { color: '#475569' },
  cta: { backgroundColor: '#0ea5a4', paddingVertical: 12, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  ctaText: { color: '#fff', fontWeight: '700' }
});