import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "#fcdb03" } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: "Habilidades" }} />
    </Stack>
  );
}
