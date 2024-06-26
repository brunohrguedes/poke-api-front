import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    width: 200,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#004a94",
    padding: 5,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  form: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginBottom: 50,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginTop: 2,
  },
  logo: {
    marginTop: 50,
  },
});
