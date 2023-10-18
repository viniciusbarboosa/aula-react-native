import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Linking, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AgendamentoScreen from './AgendamentoScreen';

function Home() {
  const [searchText, setSearchText] = useState('');
  const [barbeariaSelecionada, setBarbeariaSelecionada] = useState(null);
  const [agendamentoVisible, setAgendamentoVisible] = useState(false);

  const barberShops = [
    { id: '1', name: 'Barbearia A', location: 'Endereço A' },
    { id: '2', name: 'Barbearia B', location: 'Endereço B' },
    { id: '3', name: 'Barbearia C', location: 'Endereço C' },
  ];

  const renderBarberShop = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
      <Text>Endereço: {item.location}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
          alignItems: 'center',
        }}
        onPress={() => {
          setBarbeariaSelecionada(item);
          setAgendamentoVisible(true);
        }}
      >
        <Text style={{ color: 'white' }}>AGENDAR</Text>
      </TouchableOpacity>
      <Button
        title="Ver Local"
        onPress={() => openMaps(item.location)}
      />
    </View>
  );

  const openMaps = (location) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    Linking.openURL(mapsUrl);
  };

  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>TIME BARBER</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: 'gray',
            marginRight: 8,
            padding: 8,
          }}
          placeholder="Pesquisar"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <FontAwesome5 name="search" size={20} color="blue" />
      </View>
      <Text style={{ fontSize: 20, marginTop: 16 }}>Barbearias Recomendadas:</Text>
      <FlatList
        data={barberShops}
        keyExtractor={(item) => item.id}
        renderItem={renderBarberShop}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={agendamentoVisible}
      >
        <AgendamentoScreen barbeariaData={barbeariaSelecionada} onBack={() => setAgendamentoVisible(false)} />
      </Modal>
    </View>
  );
}

export default Home;