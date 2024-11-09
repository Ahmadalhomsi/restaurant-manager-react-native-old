import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Button, Header, Icon } from '@rneui/themed';

const managementUI = () => {
  const [orders, setOrders] = useState([
    { id: 1, table: 'Table 1', items: ['Burger', 'Fries'], status: 'New' },
    { id: 2, table: 'Table 4', items: ['Pasta', 'Salad'], status: 'New' },
    { id: 3, table: 'Table 7', items: ['Pizza', 'Soda'], status: 'In Progress' },
  ]);

  const handleApproveOrder = (orderId : any) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: 'Approved' } : order
      )
    );
  };

  const handleRejectOrder = (orderId : any) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: 'Rejected' } : order
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon name="menu" color="#fff" />}
        centerComponent={{ text: 'Restaurant Management', style: styles.headerTitle }}
        rightComponent={<Icon name="notifications" color="#fff" />}
        containerStyle={styles.header}
      />

      <View style={styles.contentContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderContainer}>
              <View style={styles.orderInfo}>
                <Text style={styles.orderTitle}>{item.table}</Text>
                <Text style={styles.orderItems}>
                  {item.items.join(', ')}
                </Text>
              </View>
              <View style={styles.orderActions}>
                <Button
                  title="Approve"
                  type="outline"
                  buttonStyle={[
                    styles.button,
                    item.status === 'Approved' && styles.disabledButton,
                  ]}
                  onPress={() => handleApproveOrder(item.id)}
                  disabled={item.status === 'Approved'}
                />
                <Button
                  title="Reject"
                  type="outline"
                  buttonStyle={[
                    styles.button,
                    item.status === 'Rejected' && styles.disabledButton,
                  ]}
                  onPress={() => handleRejectOrder(item.id)}
                  disabled={item.status === 'Rejected'}
                />
              </View>
            </View>
          )}
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderInfo: {
    flex: 1,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  orderItems: {
    fontSize: 14,
    color: '#666',
  },
  orderActions: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default managementUI;