import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

import { styles } from "./styles/details";

export default function Details() {
  const { pokemonData } = useLocalSearchParams();
  const pokemon = JSON.parse(pokemonData);

  return (
    <View style={styles.container}>
      <Text>{pokemon.name}</Text>
      <Image style={styles.sprite} source={{ uri: `${pokemon.frontSprite}` }} />
      {pokemon.abilities.map((item) => (
        <Text key={item.ability.name}>{item.ability.name}</Text>
      ))}
    </View>
  );
}
