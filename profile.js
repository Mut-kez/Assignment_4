import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
  const [name, setName] = useState('Keza Ketsia Mutabazi');
  const [bio, setBio] = useState('23822');
  const [profilePicture, setProfilePicture] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleBioChange = (text) => {
    setBio(text);
  };

  const handleProfilePictureChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      // Permission denied
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imageResult.cancelled) {
      setProfilePicture(imageResult.uri);
    }
  };

  const handleSaveChanges = () => {
    setEditing(false);
  };

  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => setEditing(true)}
        activeOpacity={0.7}
      >
        <Text style={styles.editButtonText}>{editing ? 'Cancel' : 'Edit'}</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.content}>
        {profilePicture ? (
          <Image
            style={styles.profilePicture}
            source={{ uri: profilePicture }}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{name.charAt(0)}</Text>
          </View>
        )}
        {editing ? (
          <View style={styles.editForm}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={handleNameChange}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Bio:</Text>
              <TextInput
                style={[styles.input, styles.bioInput]}
                value={bio}
                onChangeText={handleBioChange}
                multiline
              />
            </View>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleProfilePictureChange}
              activeOpacity={0.7}
            >
              <Text style={styles.uploadButtonText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSaveChanges}
              activeOpacity={0.7}
            >
              <Text style={styles.submitButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.viewForm}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F8',
    padding: 20,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#90EE90',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 40,
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 64,
    color: 'white',
    fontWeight: 'bold',
  },
  editForm: {
    width: '100%',
  },
  viewForm: {
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#000000',
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadButton: {
    backgroundColor: '#90EE90',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: -10,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#90EE90',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#90EE90',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#90EE90',
  },
});

export default ProfilePage;
