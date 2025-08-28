import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function MultiSelectChips({ options = [], selected = [], onChange }) {
  const toggle = (opt) => {
    const exists = selected.includes(opt);
    const next = exists ? selected.filter(o => o !== opt) : [...selected, opt];
    onChange(next);
  };

  return (
    <View style={styles.wrap}>
      {options.map(opt => {
        const active = selected.includes(opt);
        return (
          <Pressable key={opt} onPress={() => toggle(opt)} style={[styles.chip, active && styles.active]}>
            <Text style={[styles.text, active && styles.textActive]}>{opt}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginVertical: 8 },
  chip: { borderWidth: 1, borderColor: '#cbe4e1', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, backgroundColor: '#fff' },
  active: { backgroundColor: '#c7f0ed' },
  text: { color: '#0f766e', fontWeight: '600' },
  textActive: { color: '#065f52' }
});