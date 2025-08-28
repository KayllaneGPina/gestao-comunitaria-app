import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivitiesContext } from '../context/ActivitiesContext';
import ActivityForm from '../components/ActivityForm';

export default function NewActivityScreen({ navigation }) {
  const { addActivity } = useContext(ActivitiesContext);

  function handleSubmit(data) {
    addActivity(data);
    navigation.navigate('Atividades');
  }

  return (
    <View style={styles.container}>
      <ActivityForm onSubmit={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});