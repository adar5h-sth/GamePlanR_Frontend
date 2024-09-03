import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const BookingHistory = () => {
    const handleButtonPress = () => {
        Alert.alert('Under Development', 'This feature is currently under development by Raj Maharjan.');
    };
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVVVqQGMY9Uc2h1B_PfFWuGp-IC1eOYYilg&s' }} // Replace with your image URL or local image path
                    style={styles.image}
                />
                <TouchableOpacity style={styles.viewPaymentButton} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>View Payment</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.venueName}>XYZ XYZ</Text>
                <Text style={styles.bookingDetails}>12 May, Sun</Text>
                <Text style={styles.bookingDetails}>03:00PM - 04:00PM</Text>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.rateNowButton} onPress={handleButtonPress}>
                        <Text style={styles.buttonText}>Rate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
        marginBottom: 15,
    },
    imageContainer: {
        marginRight: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    venueName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bookingDetails: {
        fontSize: 14,
        color: '#777',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    viewPaymentButton: {
        backgroundColor: '#5f5f5f',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    rateNowButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default BookingHistory;
