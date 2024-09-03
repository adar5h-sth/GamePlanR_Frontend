import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RequestNowConfirmation = ({ navigation }) => {
    const handleDonePress = () => {
        // Navigate to the HomeScreen or wherever you want to navigate after confirmation
        navigation.navigate('Booking History');
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/156/807/original/tick-check-mark-icon-sign-symbol-design-free-png.png' }}
                style={styles.image}
            />
            <Text style={styles.title}>Request Sent & Venue Booked Successfully</Text>

            <View style={styles.referenceContainer}>
                <Text style={styles.referenceText}>Your Reference Number: </Text>
                <Text style={styles.referenceNumber}>[AB12345XYZ]</Text>
                <Text style={styles.note}>
                    Please show this number at the venue to complete our payment.
                </Text>
            </View>

            <Text style={styles.infoText}>
                You will get notified shortly as soon as another player accepts the match.
            </Text>

            <TouchableOpacity style={styles.doneButton} onPress={handleDonePress}>
                <Text style={styles.doneButtonText}>Done</Text>
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
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
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
        textAlign: 'center',
        marginVertical: 10,
    },
    infoText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    doneButton: {
        backgroundColor: 'blue',
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

export default RequestNowConfirmation;
