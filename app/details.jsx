import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

import { capitalize } from "@/utils/capitalize";

import { styles } from "./styles/details";

export default function Details() {
  const { pokemonData } = useLocalSearchParams();
  const pokemon = JSON.parse(pokemonData);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
      <Image style={styles.sprite} source={{ uri: `${pokemon.frontSprite}` }} />
      <View>
        <Text style={styles.subtitle}>Lista de habilidades:</Text>
        {pokemon.abilities.map((item) => (
          <Text key={item.ability.name}>- {capitalize(item.ability.name)}</Text>
        ))}
      </View>
    </View>
  );
}
