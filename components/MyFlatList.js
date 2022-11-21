import { View, SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//import { SafeAreaView } from 'react-native-safe-area-context';
export default function flatList(naviagtion) {
  const cars = [
    {
      id: 0,
      title: "Corolla Altis",
      Model: "2022",
      Color: "Smoke Grey",
      MakeVariant: "Local",
    },
    {
      id: 1,
      title: "Honda Civic ",
      Model: "2022",
      Color: "White",
      MakeVariant: "Local",
    },
    {
      id: 2,
      title: "Toyota Legender",
      Model: "2022",
      Color: "Royal Blue",
      MakeVariant: "Imported",
    },
    {
      id: 3,
      title: "Kia Sportage",
      Model: "2022",
      Color: "Smoke Grey",
      MakeVariant: "Local",
    },
    {
      id: 4,
      title: "Ford Raptor",
      Model: "2016",
      Color: "Mate Black",
      MakeVariant: "Imported",
    },
  ];
  const Item = ({ title, Model, Color, MakeVariant }) => (
    <View>
      <Text>{title}</Text>
      <Text>{Model}</Text>
      <Text>{Color}</Text>
      <Text>{MakeVariant}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      Model={item.Model}
      Color={item.Color}
      MakeVariant={item.MakeVariant}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
