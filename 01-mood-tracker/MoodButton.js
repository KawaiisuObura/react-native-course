import { Pressable, Text, StyleSheet } from 'react-native';

export default function MoodButton({ emoji, label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    margin: 6,
    alignItems: 'center',
    width: 90,
  },
  emoji: { fontSize: 36 },
  label: { fontSize: 14, marginTop: 4 },
});