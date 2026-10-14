import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import MoodButton from './MoodButton';

const MOODS = [
  { key: 'happy', emoji: '😊', label: 'Happy' },
  { key: 'sad', emoji: '😢', label: 'Sad' },
  { key: 'tired', emoji: '😴', label: 'Tired' },
  { key: 'excited', emoji: '🤩', label: 'Excited' },
];

const INITIAL_COUNTS = { happy: 0, sad: 0, tired: 0, excited: 0 };

export default function App() {
  const [counts, setCounts] = useState(INITIAL_COUNTS);

  function addMood(key) {
    setCounts((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  }

  function reset() {
    setCounts({ ...INITIAL_COUNTS });
  }

  const max = Math.max(...Object.values(counts));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>

      <View style={styles.row}>
        {MOODS.map((m) => (
          <MoodButton
            key={m.key}
            emoji={m.emoji}
            label={m.label}
            onPress={() => addMood(m.key)}
          />
        ))}
      </View>

      <View style={styles.counts}>
        {MOODS.map((m) => {
          const isTop = max > 0 && counts[m.key] === max;
          return (
            <Text
              key={m.key}
              style={[styles.count, isTop && styles.topCount]}
            >
              {m.emoji} {m.label}: {counts[m.key]}
            </Text>
          );
        })}
      </View>

      <Button title="Reset" onPress={reset} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c7fffb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  counts: { marginVertical: 24 },
  count: { fontSize: 18, marginVertical: 2 },
  topCount: { fontSize: 26, fontWeight: 'bold', color: '#f30e69' },
});