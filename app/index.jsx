import {
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";

import { getPokemonData } from "@/api/requests/pokemon";

import { styles } from "./styles/index/index";

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

  const onSubmit = async (data) => {
    const response = await getPokemonData(data.name);
    if (response.status === 200) {
      router.push({
        pathname: "/details",
        params: { pokemonData: JSON.stringify(response.data) },
      });
    } else {
      if (response.message === "Network Error") {
        ToastAndroid.show(
          "Erro de rede. A API pode estar offline!",
          ToastAndroid.LONG
        );
        return;
      }
      if (response.request.status === 404) {
        ToastAndroid.show("O Pokémon inserido é inválido!", ToastAndroid.LONG);
        return;
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/images/pokemon-logo.png")} />
          <Text style={styles.title}>Visualizador de habilidades</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>
            Insira o nome ou o ID do Pokémon
          </Text>
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
        </View>
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
}
