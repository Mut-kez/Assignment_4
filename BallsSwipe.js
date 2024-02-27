import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { MaterialIcons } from 'react-native-vector-icons';


const cards = [
  {
      id: 1,
    title: 'Spadling Love',
    option:'Swipe',
    price: 20,
    image: require('./blue.jpg'),
  },
  {
    id: 2,
    title: 'Spadling Love',
    option:'Swipe',
    price: 25.99,
    image: require('./violett.jpg'),
  },
  {
    id: 3,
    title: 'Spadling Love',
    option: 'swipe ',
    price: 28.99,
    image: require('./Spadling.jpg'),
  },
  {
    id: 4,
    title: 'Spadling Love',
    price: 32.99,
    image: require('./Spadlingviolet.jpg'),
  },
];

const ProductCard = ({ card, quantity, onQuantityDecrease, onQuantityIncrease }) => {
  const { title, option, price, image } = card;
  const selectedImage = image;
  const selectedPrice = price * quantity;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleLabel}>{title}</Text>
      <Text style={styles.optionLabel}>{option}</Text>
      <Image style={styles.cardImage} source={selectedImage} resizeMode="cover" />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={onQuantityDecrease}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={onQuantityIncrease}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>${selectedPrice.toFixed(2)}</Text>
    </View>
  );
};

const ProductDetailScreen = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleYup = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  const handleNope = () => {
    setCurrentCardIndex((currentCardIndex + 1) % cards.length);
  };

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleQuantityIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const selectedCard = cards[currentCardIndex];

  return (
    <View style={styles.container}>
      <SwipeCards
        cards={cards}
        loop
        renderCard={(cardData) => (
          <ProductCard
            card={cardData}
            quantity={quantity}
            onQuantityDecrease={handleQuantityDecrease}
            onQuantityIncrease={handleQuantityIncrease}
          />
        )}
        renderNoMoreCards={() => <Text>No more cards</Text>}
        handleYup={handleYup}
        handleNope={handleNope}
        cardIndex={currentCardIndex}
      />
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>    
        <Text style={styles.addToCartButtonText}>
          <MaterialIcons name="add-shopping-cart" size={23} color="#FFFFFF"/>  
          <Text style={styles.addToCartButtonTextText}>Add to Cart</Text>
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Ball added to cart</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1C1C',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleLabel: {
    fontSize: 30,
    marginBottom: 40,
    color: '#EAEEF0',
    backgroundColor: '#043647',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },  
  optionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#EAEEF0',
    backgroundColor: '#490B02',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  cardImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 24,
    marginRight: 10,
    color: '#FFF',
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#FFF',
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#FFF',
    backgroundColor: '#490B02',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 16,
  },
  addToCartButton: {
    backgroundColor: '#043647',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: -100,
    marginBottom: 100,
    alignSelf: 'center',
  },
  addToCartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#043647',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
