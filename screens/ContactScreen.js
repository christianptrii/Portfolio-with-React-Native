import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <Text style={styles.subtitle}>Feel free to reach out for any inquiries or collaborations.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
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
  form: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#3e2d55',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  messageInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#a425ff',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactScreen;