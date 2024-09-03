import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import BookingModal from './BookingModal';
import FindOpponentModal from './FindOpponentModal';

export default function Details({ route }) {
    const { futsal } = route.params;
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [opponentModalVisible, setOpponentModalVisible] = useState(false); // State for opponent modal
    const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);


    const onChange = (event, selectedDate) => {
        if (event.type === "set") { // Check if the user selected a date
            const currentDate = selectedDate || date;
            setDate(currentDate);
        }
        setShow(false); // Always close the picker after selection or cancellation
    };


    const showDatepicker = () => {
        setShow(true);
    };


    const handleSlotSelection = (slot, index) => {
        if (!slot.available) {
            Alert.alert("Slot Already Booked", "Please choose another time.");
            return;
        }
        setSelectedSlotIndex(index);
    };

    const handleBookNow = () => {
        if (selectedSlotIndex !== null) {
            setModalVisible(true);
        } else {
            Alert.alert("No Slot Selected", "Please select a time slot before booking.");
        }
    };

    const handleFindOpponent = () => {
        if (selectedSlotIndex !== null) {
            setOpponentModalVisible(true);
        } else {
            Alert.alert("No Slot Selected", "Please select a time slot before finding an opponent.");
        }
    };

    // Example slot data
    const [slots, setSlots] = useState([
        { time: '08:00AM - 09:00AM', available: true },
        { time: '09:00AM - 10:00AM', available: false },
        { time: '10:00AM - 11:00AM', available: true },
        { time: '11:00AM - 12:00PM', available: true },
        { time: '12:00PM - 01:00PM', available: false },
        { time: '01:00PM - 02:00PM', available: true },
    ]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: futsal.image }} style={styles.image} />

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{futsal.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.ratingText}>5.0</Text>
                        <Text style={styles.reviewCount}>(120 Reviews)</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.row}>
                            <Ionicons name="location-outline" size={20} color="red" />
                            <Text style={styles.infoText}>{futsal.location}Map API</Text>
                        </View>
                        <View style={styles.row}>
                            <Ionicons name="cash-outline" size={20} color="green" />
                            <Text style={styles.infoText}>{futsal.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.mapsLinkContainer}>
                                <Ionicons name="map-outline" size={20} color="#f44336" />
                                <Text style={styles.mapsLinkText}>View On Maps</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Contact Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Contact:</Text>
                        <View style={styles.row}>
                            <Ionicons name="call-outline" size={20} color="black" />
                            <Text style={styles.infoText}>{futsal.contact}Database bata aucha</Text>
                        </View>
                        <View style={styles.row}>
                            <Ionicons name="person-outline" size={20} color="black" />
                            <Text style={styles.infoText}>{futsal.contactPerson}Database bata aucha</Text>
                        </View>
                    </View>

                    {/* Availability Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Availability:</Text>
                        <View style={styles.row}>
                            <Ionicons name="calendar-outline" size={20} color="black" />
                            <Text style={styles.infoText}>{futsal.availability}Database bata aucha</Text>
                        </View>
                        <View style={styles.row}>
                            <Ionicons name="time-outline" size={20} color="black" />
                            <Text style={styles.infoText}>{futsal.hours}Database bata aucha</Text>
                        </View>
                    </View>

                    {/* Facilities Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Facilities:</Text>
                        <View style={styles.facilitiesRow}>
                            <View style={styles.facilityItem}>
                                <View style={styles.facilityIconContainer}>
                                    <Ionicons name="water-outline" size={30} color="black" />
                                </View>
                                <Text style={styles.facilityText}>Drinking Water</Text>
                            </View>
                            <View style={styles.facilityItem}>
                                <View style={styles.facilityIconContainer}>
                                    <MaterialCommunityIcons name="toilet" size={30} color="black" />
                                </View>
                                <Text style={styles.facilityText}>Washroom</Text>
                            </View>
                        </View>
                        <View style={styles.facilitiesRow}>
                            <View style={styles.facilityItem}>
                                <View style={styles.facilityIconContainer}>
                                    <Ionicons name="shirt-outline" size={30} color="black" />
                                </View>
                                <Text style={styles.facilityText}>Dressing Room</Text>
                            </View>
                            <View style={styles.facilityItem}>
                                <View style={styles.facilityIconContainer}>
                                    <Ionicons name="car-outline" size={30} color="black" />
                                </View>
                                <Text style={styles.facilityText}>Parking</Text>
                            </View>
                        </View>
                    </View>

                    {/* Pick a Date Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Pick a Date For Booking:</Text>
                        <TouchableOpacity onPress={showDatepicker}>
                            <View style={styles.dateInputContainer}>
                                <TextInput
                                    style={styles.dateInput}
                                    placeholder="dd/mm/yyyy"
                                    value={date.toLocaleDateString()}
                                    editable={false} // Prevent manual editing
                                    placeholderTextColor="#888"
                                />
                                <Ionicons name="calendar-outline" size={24} color="black" style={styles.calendarIcon} />
                            </View>
                        </TouchableOpacity>
                        {show && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                                minimumDate={new Date()} // Prevent past dates from being selected
                            />
                        )}
                    </View>

                    {/* Available Slots Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Available slots</Text>
                        <View style={styles.slotsContainer}>
                            {slots.map((slot, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.slot,
                                        { backgroundColor: selectedSlotIndex === index ? 'blue' : slot.available ? 'green' : 'red' }
                                    ]}
                                    onPress={() => handleSlotSelection(slot, index)}
                                >
                                    <Text style={styles.slotText}>{slot.time}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Adding Buttons Here */}
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNow}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.findOpponentButton} onPress={handleFindOpponent}>
                            <Text style={styles.buttonText}>Find Opponent</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Booking Modal */}
                    <BookingModal
                        visible={modalVisible}
                        onClose={() => setModalVisible(false)}
                        futsalName={futsal.name}
                        location={futsal.location}
                        date={date.toLocaleDateString()}
                        time={selectedSlotIndex !== null ? slots[selectedSlotIndex].time : ''}
                        cost={futsal.price}  // Pass the dynamic cost
                    />
                    {/* Find Opponent Modal */}
                    <FindOpponentModal
                        visible={opponentModalVisible}
                        onClose={() => setOpponentModalVisible(false)}
                        futsalName={futsal.name}
                        location={futsal.location}
                        date={date.toLocaleDateString()}
                        time={selectedSlotIndex !== null ? slots[selectedSlotIndex].time : ''}
                        cost={futsal.price}
                    />
                </View>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 230,
    },
    contentContainer: {
        padding: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        marginTop: -10,
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    ratingText: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: '600',
    },
    reviewCount: {
        fontSize: 14,
        color: '#888',
        marginLeft: 5,
    },
    infoContainer: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    infoText: {
        fontSize: 16,
        marginLeft: 10,
    },
    mapsLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    mapsLinkText: {
        color: '#f44336',
        textDecorationLine: 'underline',
        fontSize: 16,
        marginLeft: 5,
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    facilitiesRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    facilityItem: {
        flexDirection: 'row', // Changed to row to align text and icon horizontally
        alignItems: 'center', // Align items to center
        width: '40%',         // Each facility takes up 40% of the row
    },
    facilityIconContainer: {
        width: 50,            // Icon container size
        height: 50,           // Icon container size
        borderRadius: 25,     // Circle shape
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,      // Space between icon and text
    },
    facilityText: {
        fontSize: 14,
        fontWeight: 'bold',   // Bold text for better visibility
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    dateInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    calendarIcon: {
        marginLeft: 10,
    },
    slotsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    slot: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slotText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    // Button Styles
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',  // Center the buttons horizontally
        marginTop: 30,
        marginBottom: 30,
    },
    bookNowButton: {
        backgroundColor: 'red',
        paddingVertical: 12,  // Decreased padding to make buttons smaller
        paddingHorizontal: 20, // Adjust padding for button width
        borderRadius: 10,
        marginHorizontal: 10,  // Add spacing between buttons
    },
    findOpponentButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,  // Decreased padding to make buttons smaller
        paddingHorizontal: 20, // Adjust padding for button width
        borderRadius: 10,
        marginHorizontal: 10,  // Add spacing between buttons
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
