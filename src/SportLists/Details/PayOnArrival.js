import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';


const PayOnArrival = ({ navigation }) => {
    const handleDonePress = () => {
        // Navigate to the Booking History tab within the BottomTabNavigator
        navigation.navigate('Booking History');
    };


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/156/807/original/tick-check-mark-icon-sign-symbol-design-free-png.png' }}
                style={styles.image}
            />
            <Text style={styles.title}>Your Booking is Confirmed!</Text>
            <Text style={styles.subtitle}>Thank you for booking with us.</Text>

            <View style={styles.referenceContainer}>
                <Text style={styles.referenceText}>Your Reference Number is: </Text>
                <Text style={styles.referenceNumber}>[AB12345XYZ]</Text>
                <Text style={styles.note}>
                    Please show this number at the venue to complete our payment.
                </Text>
            </View>



            <TouchableOpacity style={styles.viewButton} onPress={handleDonePress}>
                <Text style={styles.viewButtonText}>View Booking</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF',
    },
    image: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    referenceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        borderStyle: 'dashed',
        borderColor: '#000',
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 5,
    },
    referenceText: {
        fontSize: 18,
    },
    referenceNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    note: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 30,
    },
    viewButton: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    viewButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PayOnArrival;