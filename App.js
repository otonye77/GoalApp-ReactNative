import { useState } from "react";
import { 
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import GoalInput from "./components/Goalinput";
import GoalItems from "./components/Goalitems";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}])
    setEnteredGoalText("");
  }

  function deleteGoalHandler(key){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goals) => goals.key !== key)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={startAddGoalHandler} title="Add new goal" color= "#5e0acc" />
        <GoalInput 
        endAddGoalHandler={endAddGoalHandler}
        startAddGoalHandler={startAddGoalHandler}
        modalIsVisible={modalIsVisible}
        enteredGoalText={enteredGoalText}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        />
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return (
         <GoalItems itemData={itemData} deleteGoalHandler={deleteGoalHandler} />
        )
      }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
