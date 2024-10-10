import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TestimonialsScreen = () => {
  const testimonials = [
    { title: '4+', description: 'Experiences' },
    { title: '200+', description: 'Happy Customers' },
    { title: '568+', description: 'Design Items' },
    { title: '221+', description: 'Clients Served' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Testimonials</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum modi repellat.
      </Text>
      <View style={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonialBox}>
            <Text style={styles.testimonialTitle}>{testimonial.title}</Text>
            <Text style={styles.testimonialDescription}>{testimonial.description}</Text>
          </View>
        ))}
      </View>
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
  testimonialsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  testimonialBox: {
    width: '48%',
    backgroundColor: '#3e2d55',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  testimonialTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a425ff',
    marginBottom: 5,
  },
  testimonialDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default TestimonialsScreen;