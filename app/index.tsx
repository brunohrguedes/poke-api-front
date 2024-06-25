import { Text, View, TextInput, Button, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Insira o nome do Pokémon</Text>
      <TextInput placeholder="Pikachu" style={styles.input} />
      <Button title="Buscar" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 6,
    width: 200,
  },
});
