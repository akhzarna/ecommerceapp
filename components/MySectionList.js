import {
  View,
  SafeAreaView,
  Text,
  SectionList,
  StyleSheet,
  Image,
} from "react-native";
export default function MySectionList(navigation) {
  const cars = [
    {
      key: 0,
      title: "Toyota",
      data: [
        {
          key: 0,
          title: "Corolla Altis",
          Model: "2022",
          Color: "Smoke Grey",
          MakeVariant: "Local",
          image: require("../assets/kabul.jpg"),
          price: "4,500,000 PKR",
        },
        {
          key: 1,
          title: "Legender (Diesel)",
          Model: "2022",
          Color: "White",
          MakeVariant: "Imported",
          image: require("../assets/kabul.jpg"),
          price: "12,500,000 PKR",
        },
        {
          key: 2,
          title: "Land Cruiser",
          Model: "2022",
          Color: "Black",
          MakeVariant: "Local",
          image: require("../assets/kabul.jpg"),
          price: "65,00,000 PKR",
        },
      ],
    },

    {
      key: 1,
      title: "Honda",
      data: [
        {
          key: 0,
          title: "Honda Civic",
          Model: "2022",
          Color: "Red",
          MakeVariant: "Local",
          image: require("../assets/kabul.jpg"),
          price: "7,500,000 PKR",
        },
        {
          key: 1,
          title: "Honda Vezel",
          Model: "2019",
          Color: "Red",
          MakeVariant: "Imported",
          image: require("../assets/kabul.jpg"),
          price: "10,000,000 PKR",
        },
        {
          key: 2,
          title: "Honda Accord",
          Model: "2022",
          Color: "Red",
          MakeVariant: "Imported",
          image: require("../assets/kabul.jpg"),
          price: "12,500,000 PKR",
        },
      ],
    },
    {
      key: 2,
      title: "Kia",
      data: [
        {
          key: 0,
          title: "Kia Sportage",
          Model: "2022",
          Color: "White",
          MakeVariant: "Local",
          image: require("../assets/kabul.jpg"),
          price: "6,500,000 PKR",
        },
        {
          key: 1,
          title: "Kia grand Carnival",
          Model: "2016",
          Color: "White",
          MakeVariant: "Imported",
          image: require("../assets/kabul.jpg"),
          price: "11,500,000 PKR",
        },
      ],
    },
  ];
  console.log(cars);

  return (
    <View style={{ backgroundColor: "#fff", flex:1 }}>
      <SectionList
      style={{flex:1}}
        sections={cars}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 3,
              padding: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 0.6 }}>
              <Text
                style={
                  (styles.sectionList,
                  { fontSize: 25, color: "#003433", fontWeight: "bold" })
                }
              >
                {item.title}
              </Text>
              <Text style={styles.sectionList}>{item.Color}</Text>
              <Text style={styles.sectionList}>
                {item.Model} ({item.MakeVariant})
              </Text>
              <Text style={(styles.sectionList, { fontSize: 20, color: "red" })}>
                {item.price} 
              </Text>
            </View>
            <View
              style={{
                flex: 0.4,
                justifyContent: "center",
              }}
            >
              <Image style={styles.image} source={item.image} />
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View
            style={{
              backgroundColor: "#003433",
              height: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#ffffff" }}
            >
              {section.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled
      />
    </View>
  );
}
const styles = StyleSheet.create({
  sectionList: {
    color: "#003433",
    fontSize: 15,
  },

  image: {
    width: "100%",
    height: 90,
    resizeMode: "center",
  },
});
