import { StyleSheet, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  const data = [
    { title: 'Todo List made with THUNK', screen: 'page1', color: ['#6DD5FA', '#2980B9'] },
    { title: 'How I used Thunk', screen: 'Page2', color: ['#FF6F61', '#D7263D'] },
    { title: 'Redux Thunk', screen: 'page3', color: ['#7DCEA0', '#27AE60'] },
    { title: 'Redux Saga', screen: 'Page4', color: ['#C39BD3', '#8E44AD'] },
  ];

  const socialLinks = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/shreedhar-thiruvengadan-reactnativedeveloper/', color: ['#E3F2FD', '#BBDEFB'], icon: <Icon name="linkedin" size={22} color="#0077B5" /> },
    { title: 'Portfolio', url: 'https://shreedhar-portfolio.netlify.app', color: ['#FFF3E0', '#FFCCBC'], icon: <Feather name="globe" size={22} color="#FF6F00" /> },
    { title: 'GitHub', url: 'https://github.com/shreedhar7', color: ['#ECEFF1', '#CFD8DC'], icon: <Icon name="github" size={22} color="#24292E" /> },
    { title: 'HackerRank', url: 'https://www.hackerrank.com/profile/shreedharsree799', color: ['#E8F5E9', '#C8E6C9'], icon: <MaterialCommunityIcons name="code-braces" size={22} color="#2EC866" /> },
  ];

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <LinearGradient colors={['#3498DB', '#2C3E50']} style={styles.header}>
        <Text style={styles.heading}>Redux Middleware (HCL)</Text>
      </LinearGradient>

      {/* Content Grid */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color[1] }]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <LinearGradient colors={item.color} style={styles.cardGradient}>
              <Text style={styles.cardText}>{item.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />

      {/* Social Buttons with Icons */}
      {/* Name Section */}
<View style={styles.nameContainer}>
  <LinearGradient colors={['#fff', '#fff']} style={styles.nameBox}>
    <Text style={styles.nameText}>Shreedhar Thiruvengadan</Text>
    <Text style={styles.roleText}>React Native Developer</Text>
  </LinearGradient>
</View>

      <View style={styles.buttonContainer}>
        {socialLinks.map((link, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => openURL(link.url)}>
            <LinearGradient colors={link.color} style={styles.buttonGradient}>
              <View style={styles.buttonContent}>
                {link.icon}
                <Text style={styles.buttonText}>{link.title}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Light mode background
  },
  header: {
    width: '100%',
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  gridContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '45%',
    height: 130,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 4,
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cardText: {
    color: '#1E1E2C',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  button: {
    width: '85%',
    marginVertical: 6,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  buttonGradient: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginLeft: 10, // Spacing between icon and text
  },
  nameContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  
  nameBox: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  
  nameText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  roleText: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginTop: 4,
    fontStyle: 'italic',
  },
  
});
