import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

interface BarberShop {
  name: string;
  address: string;
  services: Service[];
}

interface Service {
  serviceName: string;
  imageUrl: any; // Use "any" for image URL, but consider using a better typing method.
}

const Barbearias: React.FC = () => {
  const barberShops: BarberShop[] = [
    {
      name: 'Barbearia Bailão',
      address: 'Rua GRAU TEC, 123 - Cidade Teste',
      services: [
        { serviceName: 'Corte de Cabelo', imageUrl: require('../imgs/pombo.jpeg') },
        { serviceName: 'Barba 1', imageUrl: require('../imgs/img2.jpeg') },
        { serviceName: 'BARBA 2', imageUrl: require('../imgs/img3.jpg') },
      ],
    },
    {
      name: 'Barbearia Hook',
      address: 'Avenida Pesadelo na Cozinha, 456 - Cidade Teste',
      services: [
        { serviceName: 'Corte de Cabelo', imageUrl: require('../imgs/img4.jpg') },
        { serviceName: 'Barba Completa', imageUrl: require('../imgs/img6.jpeg') },
        { serviceName: 'Barba Capilar', imageUrl: require('../imgs/img7.jpg') },
      ],
    },
  ];

  const renderServiceItem = ({ item }: { item: Service }) => (
    <View style={styles.serviceItem}>
      <Image source={item.imageUrl} style={styles.serviceImage} />
      <Text style={styles.serviceName}>{item.serviceName}</Text>
    </View>
  );

  const renderBarberShop = ({ item }: { item: BarberShop }) => (
    <View style={styles.barberShopContainer}>
      <Text style={styles.barberShopName}>{item.name}</Text>
      <Text style={styles.barberShopAddress}>{item.address}</Text>
      <FlatList
        data={item.services}
        renderItem={renderServiceItem}
        horizontal
        keyExtractor={(service) => service.serviceName}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={barberShops}
        renderItem={renderBarberShop}
        keyExtractor={(barberShop) => barberShop.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  barberShopContainer: {
    backgroundColor: '#F5F5F5',
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
  },
  barberShopName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  barberShopAddress: {
    fontSize: 16,
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
  },
  serviceImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  serviceName: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Barbearias;
