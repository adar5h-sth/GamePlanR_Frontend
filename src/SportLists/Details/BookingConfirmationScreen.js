import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const BookingConfirmationScreen = ({ navigation }) => {
    const handleDonePress = () => {
        // Navigate to the Booking History tab within the BottomTabNavigator
        navigation.navigate('Booking History');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Booking is Confirmed!</Text>
            <Text style={styles.subtitle}>Thank you for booking with us.</Text>

            <Image
                source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/payment-successful-illustration-download-in-svg-png-gif-file-formats--success-money-transfer-business-plan-pack-people-illustrations-4475257.png?f=webp' }}
                style={styles.image}
            />

            <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
                <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 400, // Adjust the size of the image as needed
        height: 300,
        marginBottom: 30,
    },
    doneButton: {
        backgroundColor: '#00C853',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    doneButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BookingConfirmationScreen;
