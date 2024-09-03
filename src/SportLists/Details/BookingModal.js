import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated, Easing, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../../OverlayScreen/LoadingOverlay';

export default function BookingModal({ visible, onClose, futsalName, location, date, time, cost }) {
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handlePayOnArrival = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClose();  // Close the modal before navigation
            navigation.navigate('PayOnArrival');
        }, 2000); // 2 seconds delay
    };

    const handlePayNowPress = () => {
        setPaymentModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handlePaymentClose = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
        }).start(() => {
            setPaymentModalVisible(false);
        });
    };

    const handleConfirmPayment = () => {
        setPaymentModalVisible(false);
        onClose();
        navigation.navigate('PaymentScreen', { cost });
    };

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Text style={styles.futsalName}>{futsalName}</Text>
                        <View style={styles.locationContainer}>
                            <Ionicons name="location-outline" size={20} color="red" />
                            <Text style={styles.locationText}>{location} Map API</Text>
                        </View>

                        <View style={styles.detailsContainer}>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Date:</Text>
                                <Text style={styles.value}>{date}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Time:</Text>
                                <Text style={styles.value}>{time}</Text>
                            </View>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Total:</Text>
                                <Text style={styles.value}>{cost}</Text>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.button, styles.payOnArrivalButton]} onPress={handlePayOnArrival}>
                                <Text style={styles.buttonText}>Pay on Arrival</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.payNowButton]} onPress={handlePayNowPress}>
                                <Text style={styles.buttonText}>Pay Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Payment Method Modal */}
            <Modal
                animationType="none"
                transparent={true}
                visible={paymentModalVisible}
                onRequestClose={handlePaymentClose}
            >
                <View style={styles.paymentModalContainer}>
                    <Animated.View
                        style={[
                            styles.paymentModalContent,
                            {
                                transform: [{
                                    translateY: slideAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [300, 0],
                                    })
                                }]
                            }
                        ]}
                    >
                        <Text style={styles.paymentMethodTitle}>PAYMENT METHOD</Text>
                        <TouchableOpacity style={styles.paymentOption}>
                            <FontAwesome name="paypal" size={24} color="purple" />
                            <Text style={styles.paymentOptionText}>Paypal</Text>
                            <TouchableOpacity style={styles.payButton} onPress={handleConfirmPayment}>
                                <Text style={styles.payButtonText}>Pay</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={handlePaymentClose}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </Modal>
            <LoadingOverlay visible={loading} />
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    futsalName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    detailsContainer: {
        marginVertical: 20,
        width: '100%',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 5,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        color: 'black',
    },
    value: {
        fontSize: 16,
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        flex: 1,
        padding: 6,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    payOnArrivalButton: {
        backgroundColor: 'blue',
    },
    payNowButton: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    paymentModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    paymentModalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    paymentMethodTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 10,
    },
    paymentOptionText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    payButton: {
        backgroundColor: 'purple',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    payButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
