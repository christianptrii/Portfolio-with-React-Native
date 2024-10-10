// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PHP'
  ];

  const services = [
    'UI/UX Designing', 'App UI/UX', 'Web Development',
    'Graphic Designing', 'Product Designing', 'Social Media Posts'
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image source={require('../assets/img4.png')} style={styles.heroImage} />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Christian Putri</Text>
          <Text style={styles.heroSubtitle}>UI/UX Designer & Web Developer</Text>
          <Text style={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.buttonText}>Contact Me</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={() => navigation.navigate('Portfolio')}>
              <Text style={[styles.buttonText, styles.outlineButtonText]}>View Portfolio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Ionicons name="checkmark-circle" size={24} color="#a425ff" />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>
        <Text style={styles.sectionSubtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum modi repellat.
        </Text>
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Image source={require('../assets/img4.png')} style={styles.aboutImage} />
        <View style={styles.aboutContent}>
          <Text style={styles.aboutTitle}>GET IN TOUCH</Text>
          <Text style={styles.aboutSubtitle}>Use Creativity to Get Our Clients.</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactText}>@christianptrii</Text>
            <Text style={styles.contactText}>christianptrii@gmail.com</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Christian Putri - 2024</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1427',
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#a425ff',
    marginBottom: 20,
  },
  heroDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#a425ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#a425ff',
  },
  outlineButtonText: {
    color: '#a425ff',
  },
  skillsSection: {
    padding: 20,
    backgroundColor: '#3e2d55',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '45%',
  },
  skillText: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 16,
  },
  servicesSection: {
    padding: 20,
  },
  sectionSubtitle: {
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
  serviceCard: {
    backgroundColor: '#3e2d55',
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  serviceText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutSection: {
    padding: 20,
    alignItems: 'center',
  },
  aboutImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  aboutContent: {
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 18,
    color: '#a425ff',
    marginBottom: 10,
  },
  aboutSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactInfo: {
    alignItems: 'center',
  },
  contactText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#3e2d55',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});