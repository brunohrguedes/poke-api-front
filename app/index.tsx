import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { api } from "@/api/axios";

export default function Index() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: any) => {
    await api
      .get(`/api/pokemons/${data.name}`)
      .then((response: any) => console.log(JSON.stringify(response.data)))
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/pokemon-logo.png")} />

      <Text>Insira o nome do Pokémon</Text>

      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Pikachu"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && <Text>Esse campo é obrigatório.</Text>}

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>Buscar</Text>
      </Pressable>
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
