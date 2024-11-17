import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingOverlay from '../OverlayScreen/LoadingOverlay';

const AccountScreen = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        age: '',
        gender: '',
        profilePicture: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const userData = await fetchUserProfileData();
                setProfileData(userData);
            } catch (error) {
                Alert.alert("Error", "Failed to load profile data.");
            }
        };

        fetchProfileData();
    }, []);

    const handlePress = (feature) => {
        Alert.alert(`${feature} Under Development`, 'This feature is currently under development by Raj Maharjan.');
    };

    const handleLogout = async () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigation.reset({
                index: 0,
                routes: [{ name: 'AccountTypeSelection' }],
            });
        }, 1500); // Simulate a delay for logout process
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

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>

            <LoadingOverlay visible={isLoading} onClose={() => setIsLoading(false)} />
        </View>
    );
};

const fetchUserProfileData = async () => {
    return {
        name: 'Itachi Uchiha',
        age: 22,
        gender: 'Male',
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTba93PTz7w17wgTQZiFi9facHu8KQIWbUmww&s',
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
        borderRadius: 60, // Keep this for circular avatar
        backgroundColor: '#E0E0E0',
        borderWidth: 3, // Adds a border to the image
        borderColor: '#black',
        marginBottom: 10, // Add some space below the avatar
    },
    username: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        marginTop: 4,
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
