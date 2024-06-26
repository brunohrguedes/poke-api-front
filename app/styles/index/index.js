import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    width: 200,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#43a",
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
  },
  form: {
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
