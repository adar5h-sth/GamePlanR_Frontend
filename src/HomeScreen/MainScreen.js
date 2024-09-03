import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ArenaCard from './ArenaCard';
import SportCategoryCard from './SportCategoryCard';
import SearchModal from '../Prompt/SearchModal';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSport, setSelectedSport] = useState(null);
    const navigation = useNavigation();

    const handleCardPress = (sport) => {
        setSelectedSport(sport);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleContinue = () => {
        setModalVisible(false);

        switch (selectedSport) {
            case 'Football':
                navigation.navigate('FutsalList');
                break;
            case 'Basketball':
                // Navigate to the basketball courts screen
                navigation.navigate('BasketballCourtsList');
                break;
            case 'Cricket':
                // Navigate to the cricket grounds screen
                navigation.navigate('CricketGroundsList');
                break;
            case 'Badminton':
                // Navigate to the badminton courts screen
                navigation.navigate('BadmintonCourtsList');
                break;
            default:
                break;
        }
    };
    const handleArenaCardPress = () => {
        const futsalDetails = {
            name: "Adarsh ko Futsal",
            location: "", //Map API
            distance: "2.1 km",
            price: "NRP 600",
            rating: "5.0",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/5/EY/RW/SB/3103550/futsal-court-construction-500x500.jpg",
        };

        navigation.navigate('Details', { futsal: futsalDetails });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>GamePlanR</Text>
            <View style={styles.card}>
                <Text style={styles.locationLabel}>Current Location:</Text>
                <View style={styles.locationRow}>
                    <Icon name="location-sharp" size={18} color="red" />
                    <Text style={styles.locationText}>Kuleshwor, Kathmandu</Text>
                </View>
            </View>

            <Text style={styles.recommendationTitle}>Recommended Arena</Text>

            <ArenaCard
                name="Adarsh ko Futsal"
                location="Hanagulu Marg, Kuleshwor"
                distance="2.1 km"
                price="600"
                rating="5.0"
                image="https://5.imimg.com/data5/SELLER/Default/2021/5/EY/RW/SB/3103550/futsal-court-construction-500x500.jpg"
                onPress={handleArenaCardPress}
            />

            <Text style={styles.sportCategoryTitle}>Sport Categories</Text>

            <View style={styles.sportCategoryContainer}>
                <SportCategoryCard
                    name="Football"
                    image="https://www.instituteforgovernment.org.uk/sites/default/files/styles/16_9_desktop/public/2023-03/premier-league-football-1504x846px.jpg?h=dd1b06b1&itok=3dihrnpr"
                    onPress={() => handleCardPress('Football')}
                />
                <SportCategoryCard
                    name="Basketball"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFf-jrr9SFEk44pFHUr1abIRfieJnFuvRvKlLWQ0zQtio78lHxZbJViXPdQ6I5KRXgQJM&usqp=CAU"
                    onPress={() => handleCardPress('Basketball')}
                />
            </View>

            <View style={styles.sportCategoryContainer}>
                <SportCategoryCard
                    name="Cricket"
                    image="https://img.jagranjosh.com/imported/images/E/Articles/images%20(1).webp"
                    onPress={() => handleCardPress('Cricket')}
                />
                <SportCategoryCard
                    name="Badminton"
                    image="https://english.makalukhabar.com/wp-content/uploads/2024/01/BADMINTON-MK.jpg"
                    onPress={() => handleCardPress('Badminton')}
                />
            </View>
            <SearchModal visible={modalVisible} onClose={handleCloseModal} onContinue={handleContinue} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        marginTop: 28,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C2C2C',
    },
    card: {
        backgroundColor: '#E0D6D6',
        borderRadius: 8,
        padding: 8,
        marginTop: 4,

    },

    locationLabel: {
        fontSize: 14,
        color: '#6F6F6F',
        fontWeight: 'bold',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    locationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 4,
    },
    recommendationTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2C2C2C',
        marginTop: 8,
    },
    sportCategoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2C2C2C',
        marginTop: 3,
    },
    sportCategoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        marginHorizontal: -3,

    },
});

