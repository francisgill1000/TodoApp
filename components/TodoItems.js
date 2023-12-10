import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItems({ item, pressHandler }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity >
                <Text style={styles.item}>{item.text}no</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <Text style={styles.deleteItem}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // or 'space-around' for space around buttons
        alignItems: 'center', // Aligns items vertically
        // Add other styling properties as needed
    },
    item: {
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        padding:10,
        marginBottom:10,
        width:350,


    },
    deleteItem: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding:10,
        marginBottom:10,
        textAlign:'center',
        color:'white'
    },
})