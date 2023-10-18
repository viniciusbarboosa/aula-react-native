import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
};

LocaleConfig.defaultLocale = 'pt-br';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'blue',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timeText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function AgendamentoScreen({ barbeariaData, onBack }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Agendamento na Barbearia {barbeariaData.name}
        </Text>
      </View>
      <Calendar
        current={'2023-10-01'}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'blue' },
        }}
        onDayPress={handleDayPress}
      />
      <ScrollView style={styles.section}>
        <Text style={styles.sectionTitle}>Horários Disponíveis:</Text>
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack} // Aqui você pode adicionar a ação de agendamento
        >
          <Text style={styles.timeText}>12:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        {/* Repita esta estrutura para cada horário disponível */}
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>13:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        {/* Outros horários disponíveis */}
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>14:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>15:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>16:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>17:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.timeSlot}
          onPress={onBack}
        >
          <Text style={styles.timeText}>18:00 - Nome Horário</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Agendar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default AgendamentoScreen;
