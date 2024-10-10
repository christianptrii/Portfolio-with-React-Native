import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ServicesScreen = () => {
  const services = [
    'UI/UX Designing',
    'App UI/UX',
    'Web Development',
    'Graphic Designing',
    'Product Designing',
    'Social Media Posts',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum modi repellat.
      </Text>
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceBox}>
            <Text style={styles.serviceText}>{service}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View more</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1427',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceBox: {
    backgroundColor: '#3e2d55',
    padding: 20,
    borderRadius: 15,
    width: '48%',
    marginBottom: 20,
  },
  serviceText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#a425ff',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ServicesScreen;