import React from "react";
import { FlatList, SafeAreaView, ScrollView, SectionList, Text, StyleSheet, Image } from "react-native";

const flores = ['🌹Flores Ornamentais', '🌺 Flores Tropicais', '🌸 Flores Raras e Exóticas'];
const floresCategoria =[
  { title: '🌹Ornamentais', data: ['Rosa 🌹', 'Orquídea 🌸']},
  { title: '🌺Tropicais', data: ['Hibisco 🌺', 'Alpinia 🌿']},
  {title: '🌸Raras e Exóticas', data: ['Orquídea-Fantasma 👻', 'Flor-de-Lótus 🪷']},
];



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Image 
          style={styles.image}
          source={require('./public/flower.jpg')}
        />

        <Text>Tipos de flores! 💐</Text>
        <FlatList
          data={flores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />

        <Text>🏵️ Algumas das mais populares dos tipos acima:</Text>
        <SectionList 
          sections={floresCategoria}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section: {title} }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008b',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 20,
  },
  item: {
    fontSize: 14,
    padding: 10,
    marginLeft: 7,
  },

  sectionHeader: {
    fontSize: 16,
    backgroundColor: '#1d44b8',
    padding: 5,
    marginTop: 7,
  },
});