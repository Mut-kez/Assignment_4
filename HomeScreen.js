import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, ImageBackground, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NetInfo from '@react-native-community/netinfo'; // Import NetInfo
import ThemeToggleButton from './ui';

const { width, height } = Dimensions.get('window');

const DrawerItem = ({ name, icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
      <MaterialIcons name={icon} size={24} color="#800000" style={styles.drawerItemIcon} />
      <Text style={styles.drawerItemText}>{name}</Text>
    </TouchableOpacity>
  );
};

const DrawerContent = ({ closeDrawer }) => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    closeDrawer();
    navigation.navigate(screenName);
  };

  return (
    <ScrollView contentContainerStyle={styles.drawerContent}style={styles.scrollView}>
    <DrawerItem
       name="Home"
        icon="add"
        onPress={() => handleNavigation('Home')}
      />
      <DrawerItem
        name="Calculator"
        icon="add"
        onPress={() => handleNavigation('Calculator')}
      />
      <DrawerItem
        name="Profile"
        icon="add"
        onPress={() => handleNavigation('Profile')}
      />
     
      <DrawerItem
       name="Contacts"
        icon="add"
        onPress={() => handleNavigation('contacts')}
      />
    </ScrollView>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isNightMode, setIsNightMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
    
  useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    if (!isConnected && state.isConnected) {
      // Display toast message when connection is regained
      ToastAndroid.show('Internet Connection Restored', ToastAndroid.SHORT);
    } else if (!state.isConnected) {
      // Display toast message when disconnected
      ToastAndroid.show('No Internet Connection', ToastAndroid.SHORT);
    }
    setIsConnected(state.isConnected);
  });

  return () => {
    unsubscribe();
  };
}, [isConnected]); // Dependency array to run effect only when isConnected changes


  const handleNavigation = (screenName) => {
    closeDrawer();
    navigation.navigate(screenName);
  };

  const handleToggleTheme = () => {
    setIsNightMode((prevIsNightMode) => !prevIsNightMode);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
 

  return (
    <ImageBackground source={require('./blue.jpg')} style={styles.backgroundImage}>
      <View style={[styles.container, isNightMode && styles.containerDark]}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.drawerButton}>
          <MaterialIcons name="menu" size={24} color={isNightMode ? '#FFFFFF' : '#000000'} />
        </TouchableOpacity>

        {isDrawerOpen && <DrawerContent closeDrawer={closeDrawer} />}

        <View style={styles.contentContainer}>
          {/* Dashboard content */}
          <Text style={styles.contentText}>Welcome to My App</Text>
        </View>

        <View style={styles.noInternetContainer}>
          {!isConnected && (
            <Text style={styles.noInternetText}>No Internet Connection</Text>
          )}
        </View>
<View style={styles.connectedContainer}>
  {isConnected && (
    <Text style={styles.connectedText}>Connected to the Internet</Text>
  )}
</View>

        <View style={styles.themeButtonContainer}>
          <ThemeToggleButton
            isNight={isNightMode}
            onPress={handleToggleTheme}
            style={styles.themeButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#2E2E2E',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: width,
    height: height,
  },
  drawerButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    paddingTop: 80,
    justifyContent: 'center',
  },
  scrollView: {
    height: '80%', // Adjust the height as needed
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  drawerItemIcon: {
    marginRight: 15,
    color:'black',
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#90EE90',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  contentText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#90EE90',
    textAlign: 'center',
  },
  themeButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  themeButton: {
    alignSelf: 'center',
  },
 noInternetContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  
},
  noInternetText: {
    color: '#ffffff',
    fontWeight: 'bold',
     textAlign: 'center',
  },
   connectedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  connectedText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
