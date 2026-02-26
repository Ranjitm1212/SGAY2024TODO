import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type AboutUsProps = {
  theme: 'LIGHT' | 'DARK';
};

const AboutUs: React.FC<AboutUsProps> = ({ theme }) => {
  const colors = {
    background: theme === 'DARK' ? '#121212' : '#f4f6f8',
    card: theme === 'DARK' ? '#1E1E1E' : '#ffffff',
    text: theme === 'DARK' ? '#ffffff' : '#000000',
    subText: theme === 'DARK' ? '#aaaaaa' : '#555',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.title, { color: colors.text }]}>
          📝 Todo App
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Your Simple Task Manager
        </Text>
        
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            About This App
          </Text>
          <Text style={[styles.description, { color: colors.text }]}>
            This Todo App is a simple and intuitive task management application 
            built with React Native. It helps you organize your daily tasks and 
            stay productive.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Features
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Add new tasks with a simple interface
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Mark tasks as completed with a tap
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Delete tasks you no longer need
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Filter tasks by status (All, Active, Completed)
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Dark/Light theme toggle for comfortable viewing
          </Text>
          <Text style={[styles.feature, { color: colors.text }]}>
            • Local storage to keep your tasks safe
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Built With
          </Text>
          <Text style={[styles.tech, { color: colors.text }]}>
            • React Native
          </Text>
          <Text style={[styles.tech, { color: colors.text }]}>
            • TypeScript
          </Text>
          <Text style={[styles.tech, { color: colors.text }]}>
            • React Native Safe Area Context
          </Text>
          <Text style={[styles.tech, { color: colors.text }]}>
            • AsyncStorage for data persistence
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Version
          </Text>
          <Text style={[styles.version, { color: colors.text }]}>
            1.0.0
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.subText }]}>
            Thank you for using our Todo App!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  feature: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
  },
  tech: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
  },
  version: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default AboutUs;