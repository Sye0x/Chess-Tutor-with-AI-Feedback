import { Text, View, StyleProp, StyleSheet } from "react-native";
// no time ;( will do this in Vacation
export default function Index() {
  return (
    <View style={styles.bg}>
      <Text>My Chess Tutor</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
