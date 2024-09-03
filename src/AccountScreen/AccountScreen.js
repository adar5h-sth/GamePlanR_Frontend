import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';


const AccountScreen = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        age: '',
        gender: '',
        profilePicture: '',
    });

    useEffect(() => {
        // Fetch data from backend here and update state
        const fetchProfileData = async () => {
            // Replace this with your actual API call
            const userData = await fetchUserProfileData();
            setProfileData(userData);
        };

        fetchProfileData();
    }, []);

    const handlePress = (feature) => {
        Alert.alert(`${feature} Under Development`, 'This feature is currently under development by Raj Maharjan.');
    };


    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <Image
                    source={{ uri: profileData.profilePicture || 'https://example.com/default-avatar.png' }}
                    style={styles.avatar}
                />
                <Text style={styles.username}>{profileData.name || 'Username'}</Text>
                <Text style={styles.details}>
                    {profileData.age || 'Age'} | {profileData.gender || 'Gender'}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>ACCOUNT</Text>
                <TouchableOpacity style={styles.option} onPress={() => handlePress('Profile')}>
                    <Text style={styles.optionText}>Profile</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.option, { borderBottomWidth: 0 }]} onPress={() => handlePress('Payments')}>
                    <Text style={styles.optionText}>Payments</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>SUPPORT</Text>
                <TouchableOpacity style={[styles.option, { borderBottomWidth: 0 }]} onPress={() => handlePress('Help and Support')}>
                    <Text style={styles.optionText}>Help and Support</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const fetchUserProfileData = async () => {
    // This is a mock function; replace it with your actual API call
    return {
        name: 'Jeethalal Gada',
        age: 45,
        gender: 'Male',
        profilePicture: 'https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg',
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    profileSection: {
        alignItems: 'center',
        marginTop: 10,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#E0E0E0',
    },
    username: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 4, // Space between username and details
        fontSize: 14,
        color: '#666',
    },
    section: {
        width: '100%',
        backgroundColor: '#E7EFFB',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#666666',
        marginBottom: 10,
        marginLeft: 10,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 1,
    },
    optionText: {
        fontSize: 16,
        color: '#333333',
    },
    arrow: {
        fontSize: 22,
        color: '#666666',
    },
    logoutButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderColor: '#007AFF',
        borderWidth: 1,
    },
    logoutText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AccountScreen;
