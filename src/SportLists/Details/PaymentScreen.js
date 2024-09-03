import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



const PaymentScreen = ({ route, navigation }) => {
    const { cost } = route.params; // Get the cost passed from the BookingModal
    const [mobileNumber, setMobileNumber] = useState('');
    const [khaltiPin, setKhaltiPin] = useState('');

    const handlePaymentConfirm = () => {
        // After payment is confirmed, navigate to the booking confirmation screen
        navigation.navigate('BookingConfirmationScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Paypal Ko API</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Paypal Number"
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
            />

            <TextInput
                style={styles.input}
                placeholder="Paypal PIN"
                secureTextEntry={true}
                value={khaltiPin}
                onChangeText={setKhaltiPin}
            />

            <TouchableOpacity style={styles.payButton} onPress={handlePaymentConfirm}>
                <Text style={styles.payButtonText}>PAY RS {cost}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPinText}>Forgot your Khalti PIN?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.setPinText}>SET KHALTI PIN</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 40,
    },
    logoText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5E2D89', // Using the same purple tone as the logo
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    payButton: {
        backgroundColor: '#5E2D89', // Matching the Khalti purple
        paddingVertical: 15,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    payButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPinText: {
        color: '#8A2BE2',
        marginTop: 20,
        fontSize: 14,
    },
    setPinText: {
        color: '#8A2BE2',
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default PaymentScreen;
