import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const Tab1 = () => <View><Text>Ketsia</Text></View>;
  const Tab2 = () => <View><Text>AUCA</Text></View>;
  const Tab3 = () => <View><Text>Mobile Programming</Text></View>;
  return (
    <View style={styles.container}>
      <View style={styles.tabNav}>
        <TouchableOpacity style={[styles.tab, activeTab === 'tab1' ? styles.activeTab : null]} onPress={() => handleTabClick('tab1')}>
          <Text style={styles.tabText}>Names</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'tab2' ? styles.activeTab : null]} onPress={() => handleTabClick('tab2')}>
          <Text style={styles.tabText}>Department</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, activeTab === 'tab3' ? styles.activeTab : null]} onPress={() => handleTabClick('tab3')}>
          <Text style={styles.tabText}>Course</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContent}>
        {activeTab === 'tab1' && <Tab1 />}
        {activeTab === 'tab2' && <Tab2 />}
        {activeTab === 'tab3' && <Tab3 />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // Add padding to push the tabs below the status bar
  },
  tabNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 12,
    marginTop: 5,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigation;
