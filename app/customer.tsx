import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { Button, Header, Icon } from '@rneui/themed';

const CustomerOrderUI = () => {
  const [menu, setMenu] = useState([
    { id: 1, name: 'Burger', price: 9.99 },
    { id: 2, name: 'Fries', price: 4.99 },
    { id: 3, name: 'Pasta', price: 12.99 },
    { id: 4, name: 'Salad', price: 7.99 },
    { id: 5, name: 'Pizza', price: 14.99 },
    { id: 6, name: 'Soda', price: 2.99 },
  ]);

  const [order, setOrder] = useState<{ id: number; name: string; price: number }[]>([]);
  const [tableNumber, setTableNumber] = useState('');

  const handleAddToOrder = (item : any) => {
    setOrder([...order, item]);
  };

  const handleRemoveFromOrder = (item : any) => {
    setOrder(order.filter((i) => i.id !== item.id));
  };

  const handlePlaceOrder = () => {
    // Add logic to send order to restaurant management
    console.log('Order placed:', { table: tableNumber, items: order });
    setOrder([]);
    setTableNumber('');
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon name="menu" color="#fff" />}
        centerComponent={{
          text: 'Place Your Order',
          style: styles.headerTitle,
        }}
        rightComponent={<Icon name="shopping-cart" color="#fff" />}
        containerStyle={styles.header}
      />

      <View style={styles.contentContainer}>
        <View style={styles.orderContainer}>
          <Text style={styles.sectionTitle}>Menu</Text>
          <FlatList
            data={menu}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.menuItem}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
                <Button
                  title="Add"
                  type="outline"
                  buttonStyle={styles.button}
                  onPress={() => handleAddToOrder(item)}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.orderContainer}>
          <Text style={styles.sectionTitle}>Your Order</Text>
          <View style={styles.orderDetails}>
            <TextInput
              style={styles.tableInput}
              placeholder="Enter table number"
              value={tableNumber}
              onChangeText={setTableNumber}
            />
            <FlatList
              data={order}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.orderItem}>
                  <Text style={styles.orderItemName}>{item.name}</Text>
                  <Button
                    title="Remove"
                    type="outline"
                    buttonStyle={styles.button}
                    onPress={() => handleRemoveFromOrder(item)}
                  />
                </View>
              )}
            />
            <Button
              title="Place Order"
              type="solid"
              buttonStyle={styles.placeOrderButton}
              onPress={handlePlaceOrder}
              disabled={order.length === 0 || tableNumber.trim() === ''}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007bff',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuItemName: {
    flex: 1,
    fontSize: 14,
  },
  menuItemPrice: {
    fontSize: 14,
    marginHorizontal: 8,
  },
  orderDetails: {
    marginTop: 12,
  },
  tableInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  orderItemName: {
    flex: 1,
    fontSize: 14,
  },
  button: {
    marginHorizontal: 4,
  },
  placeOrderButton: {
    marginTop: 12,
  },
});

export default CustomerOrderUI;