import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Appbar, List, Divider } from 'react-native-paper';

const Perfil = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <List.Section>
          <List.Subheader>Informações Pessoais</List.Subheader>
          <List.Item title="Nome" description="Seu Nome" left={() => <List.Icon icon="account" />} />
          <Divider />
          <List.Item title="Email" description="seuemail@example.com" left={() => <List.Icon icon="email" />} />
          <Divider />
          <List.Item title="Localidade" description="Sua Localidade" left={() => <List.Icon icon="map-marker" />} />
        </List.Section>

        <List.Section>
          <List.Subheader>Últimos Agendamentos</List.Subheader>
          <List.Item
            title="Corte de Cabelo"
            description="Agendado para 24/10/2023"
            left={() => <List.Icon icon="calendar" />}
          />
          <Divider />
          <List.Item
            title="Corte Barba"
            description="Agendada para 24/10/2023"
            left={() => <List.Icon icon="calendar" />}
          />
          <Divider />
          <List.Item
            title="barba e cabelo"
            description="Agendado para 24/10/2023"
            left={() => <List.Icon icon="calendar" />}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
};

export default Perfil;
