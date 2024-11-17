import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoadingOverlay from '../OverlayScreen/LoadingOverlay';

const UserLoginScreen = ({ navigation }) => {
    // State variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for API request

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Simple email format validation
    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    // Login handler with validation
    const handleLogin = async () => {
        // Log the email and password entered by the user
        console.log('Email:', email);
        console.log('Password:', password);

        // Check if both fields are filled in
        if (!email || !password) {
            setError('Please fill in both email and password.');
            return;
        }
        
        // Check if the email format is valid
        if (!validateEmail(email)) {
            setError('Please enter a valid email.');
            return;
        }

        setLoading(true); // Show loading indicator
        setError(''); // Clear any previous error

        // Simulate a successful login after 1 second (to mimic API delay)
        setTimeout(async () => {
            // Simulate storing token in AsyncStorage
            await AsyncStorage.setItem('token', 'fakeToken12345');

            setLoading(false);
            // After successful login, navigate to the BottomTabNavigator (or MainScreen)
            navigation.replace('BottomTabNavigator'); 
        }, 1000);
    };

    // Clear error when user types
    const handleEmailChange = (value) => {
        setEmail(value);
        if (error) setError('');
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
        if (error) setError('');
    };

    // Navigate to Register screen
    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    };

    // Navigate to Forgot Password screen
    const handleForgotPassword = () => {
        navigation.navigate('ForgotPasswordScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo-design.png')}
                style={styles.logo}
            />

            <View style={styles.loginBox}>
                <Text style={styles.loginText}>LOGIN</Text>
                <Text style={styles.subText}>to access your account.</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <MaterialIcons
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <View style={styles.forgotPasswordContainer}>
                    <TouchableOpacity onPress={handleForgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.loginButton, loading && { backgroundColor: '#ddd' }]}
                    onPress={handleLogin}
                    disabled={loading} // Disable the button when loading
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.newMemberText}>New Member?</Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.registerText}>Register Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Loading Overlay */}
            <LoadingOverlay visible={loading} onClose={() => setLoading(false)} />
        </View>
    );
};

// Stylesheet for the login screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 40,
    },
    loginBox: {
        width: '100%',
        backgroundColor: '#F3F4FB',
        borderRadius: 10,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    loginText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    subText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        fontSize: 16,
    },
    passwordContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    passwordInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    forgotPasswordContainer: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 30,
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#007BFF',
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#FF4C61',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    newMemberText: {
        fontSize: 14,
        color: '#888',
    },
    registerText: {
        fontSize: 14,
        color: '#FF4C61',
        marginLeft: 5,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    }
});

export default UserLoginScreen;
