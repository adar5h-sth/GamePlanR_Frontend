import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

export default function SearchModal({ visible, onClose, onContinue }) {
    const [location, setLocation] = useState('');

    useEffect(() => {
        if (visible) {
            setLocation(''); // Reset the location input when the modal opens
        }
    }, [visible]);

    const handleLocationClick = () => {
        setLocation('Hanagulu Marg, Kuleshwor');
    };

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Ionicons name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Ready to Find Sports Venues Nearby</Text>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={23} color="#A9A9A9" />
                        <TextInput
                            placeholder="Search for cities, places..."
                            style={styles.searchInput}
                            value={location}
                            onChangeText={setLocation}
                        />
                        <TouchableOpacity onPress={handleLocationClick}>
                            <Ionicons name="my-location" size={23} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
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
        borderRadius: 12,
        padding: 25,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 3,
        right: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 3,
        marginBottom: 20,
        width: '110%',
    },
    searchInput: {
        flex: 1,
        height: 40,
        marginLeft: 10,
    },
    continueButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    continueButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
