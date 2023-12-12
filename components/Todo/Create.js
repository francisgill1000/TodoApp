import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';


export default function AddTodo() {

    const [title, setTitle] = useState("");


    const handleSubmit = async () => {

        const url = `http://192.168.0.100:8000/api/todo`;


        // myAPiFetch(url, "POST", { title, status: 0 });

        try {

            const config = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ title, status: 0 })
            }

            const response = await fetch(url, config);

            const { message } = await response.json();

            if (!response.ok) {
                Alert.alert("Error", JSON.stringify(message));
                return;
            }

            Alert.alert("Result:", "Data inserted");


        } catch (error) {
            Alert.alert("Error", "Something went wrong");

        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={title}
                onChangeText={(value) => setTitle(value)}
            />
            <Button title='submit' onPress={() => handleSubmit()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,

    }
});
