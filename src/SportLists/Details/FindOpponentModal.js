import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../../OverlayScreen/LoadingOverlay';

export default function FindOpponentModal({ visible, onClose, futsalName, location, date, time, cost }) {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const handleRequestNow = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onClose();  // Close the modal before navigation
            navigation.navigate('RequestNowConfirmation');
        }, 2000); // 2 seconds delay
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

                        <TouchableOpacity style={styles.requestButton} onPress={handleRequestNow}>
                            <Text style={styles.requestButtonText}>Request Now</Text>
                        </TouchableOpacity>
                    </View>
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
    requestButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    requestButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
