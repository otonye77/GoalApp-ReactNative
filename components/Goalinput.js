import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ({ endAddGoalHandler, modalIsVisible, enteredGoalText, goalInputHandler, addGoalHandler }) => {
    return (
    <Modal visible={modalIsVisible} animationType="slide">
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} /> 
        <TextInput value={enteredGoalText} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your Course Goals' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
             <Button onPress={addGoalHandler} color="b180f0" title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={endAddGoalHandler} color="#f31282" title="Cancel" />
          </View>
        </View>
    </View>
    </Modal>
    )
}
export default GoalInput
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: "100%",
        borderRadius: 6,
        marginRight: 8,
        padding: 8
      },
      buttonContainer: {
        flexDirection: "row",
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})