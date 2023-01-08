import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItems = ({ itemData, deleteGoalHandler, key }) => {
    return (
        <Pressable android_ripple={{ color: "#dddddd" }} onPress={() => deleteGoalHandler(itemData.item.key)}>
        <View key={itemData.item.key} style={styles.goalItem}>
           <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
        </Pressable>
    )
}
export default GoalItems;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
      },
      goalText: {
        color: "white"
      }
})