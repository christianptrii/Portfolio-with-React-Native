import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PortfoliosScreen = () => {
  const portfolios = [
    {
      title: 'UI/UX Designing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.',
    },
    {
      title: 'Graphic Designing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.',
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.',
    },
    {
      title: 'Social Media Posts Designing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.',
    },
    {
      title: 'Mobile App UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Portfolios</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum modi repellat.
      </Text>
      <View style={styles.portfoliosContainer}>
        {portfolios.map((portfolio, index) => (
          <View key={index} style={styles.portfolioBox}>
            <Text style={styles.portfolioTitle}>{portfolio.title}</Text>
            <Text style={styles.portfolioDescription}>{portfolio.description}</Text>
            <TouchableOpacity style={styles.seeMoreButton}>
              <Text style={styles.seeMoreText}>See more</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.portfolioBox}>
          <Text style={styles.portfolioTitle}>Want your design stunning?</Text>
          <Text style={styles.portfolioDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic asperiores mollitia iusto praesentium.
          </Text>
          <TouchableOpacity style={styles.letsTalkButton}>
            <Text style={styles.letsTalkText}>Let's talk</Text>
          </TouchableOpacity>
        </View>
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
  portfoliosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  portfolioBox: {
    borderColor: '#3e2d55',
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 20,
  },
  portfolioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  portfolioDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  seeMoreButton: {
    alignSelf: 'flex-start',
  },
  seeMoreText: {
    color: '#c575ff',
    textDecorationLine: 'underline',
  },
  letsTalkButton: {
    backgroundColor: '#a425ff',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  letsTalkText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default PortfoliosScreen;