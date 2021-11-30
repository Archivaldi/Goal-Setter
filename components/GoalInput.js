import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal("");
    }

    const cancelHandler = () => {
        props.cancelHandler();
        setEnteredGoal("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add task here"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="CANCEL" onPress={cancelHandler} color="red"/></View>
                </View>
            </View>
        </Modal>
    )
};
//<Button title="ADD" onPress={props.addGoalHandler.bind(this, enteredGoal)} />

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },

    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '75%',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    button: {
        width: "50%"
    }
})

export default GoalInput;