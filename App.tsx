// Import all required inputs from Expo and React Native
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet,Text,
        View,TextInput,Button,
        FlatList,ScrollView,Image,
} from "react-native";//This is the where i imported the react native components.

//This define what each StoreItem has (the attributes that describe a menu item)
type storeItem = {
  id: string;
  name: string;
  price: string;
  category: string;
  description?: string;
};

//This is the main function for the app
export default function App() {
  // State variables for each text input field
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  //State variable that holds all menu items added by the chef
  const [productCatalogue, setProductCatalogue] = useState<storeItem[]>([]);

  //Function that adds new item to the list
  const addNewItem = () => {
    // Check if any field is empty before adding
    if (!itemName || !itemCategory || !itemPrice || !itemDescription) return;

    // Create new item object with all entered details
    const newItem: storeItem = {
      id: (productCatalogue.length + 1).toString(),
      name: itemName,
      category: itemCategory,
      price: itemPrice,
      description: itemDescription,
    };

    // Add the new item to the existing list
    setProductCatalogue((prevList) => [newItem, ...prevList]);

    // Clear all input fields after adding
    setItemName("");
    setItemCategory("");
    setItemPrice("");
    setItemDescription("");
  };

  //App User Interface starts here
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./Images/chef_logo.png')}
          style={styles.logoImage}
        />{/*The is the name of the chef's moobile */}
        <Text style={styles.appName}>Christofel</Text>
      </View>
     
      
      {/*adding new menu items*/}
      <Text style={styles.title}>Add New Menu Item</Text>

      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />

      <TextInput
        placeholder="Item Category"
        value={itemCategory}
        onChangeText={setItemCategory}
        style={styles.input}
      />

      <TextInput
        placeholder="Item Price"
        value={itemPrice}
        onChangeText={setItemPrice}
        style={styles.input}
      />

      <TextInput
        placeholder="Item Description"
        value={itemDescription}
        onChangeText={setItemDescription}
        style={styles.input}
      />
      {/*This flatlist displays all the items added by the chef*/}
      <FlatList
      data={productCatalogue}
      keyExtractor={(storeItem) => storeItem.id}
      renderItem={({item}) => (
        <View style= {styles.displayItem}>
          <Text style={styles.displayText}>{item.name} - {item.price}</Text>
          <Text style={styles.displayText}>{item.category} - {item.description}</Text>
        </View>
      )}
      style={styles.itemList }
      />

      <Button title="Add Item" onPress={addNewItem} color="#e63946" />

      {/* Total number of custom items added by the chef to the menu items*/}
      <Text style={styles.totalCount}>
        Total Items: {productCatalogue.length}
      </Text>

      {/*Full menu*/}
      <Text style={styles.menuTitle}>Full Menu</Text>

      {/*Starters*/}
      <Text style={styles.sectionHeader}>Starters</Text>

      <View style={styles.menuItem}>
        <Image source={require("./Images/cheesy_q.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Cheesy Chicken Quesadilla - R95.99</Text>
        <Text style={styles.menuDescription}>
          Your choice of Blueberry Watermelon, Dragon Fruit Raspberry, Very Cherry Berry, Blue
          Lemonade or Strawberry & Passion Fruit.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/buffalo_wings.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Buffalo Wings (12) - R139.99</Text>
        <Text style={styles.menuDescription}>
          Served with Durky Sauce and Roquefort Dressing.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/spicy_livers.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Spicy Chicken Livers - R84.99</Text>
        <Text style={styles.menuDescription}>
          Served with a toasted Portuguese garlic roll.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/queen_prawns.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Queen Prawns - R97.99</Text>
        <Text style={styles.menuDescription}>
          4 Queen prawns grilled in your choice of lemon OR garlic butter. Served on savoury rice
          with peri-peri sauce.
        </Text>
      </View>

      {/*Main Courses*/}
      <Text style={styles.sectionHeader}>Main Courses</Text>

      <View style={styles.menuItem}>
        <Image source={require("./Images/ribs.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Ribs & Quarter Chicken - R349.99</Text>
        <Text style={styles.menuDescription}>
          Marinated pork ribs with a quarter chicken.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/rump_wings.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Rump & Buffalo Wings - R235.99</Text>
        <Text style={styles.menuDescription}>
          200g Rump steak and buffalo wings.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/cheddamelt.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Cheddamelt Steak 300g - R279.99</Text>
        <Text style={styles.menuDescription}>
          Marinated pork ribs with a quarter chicken.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/pork_ribs.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Pork Spare Ribs 800g - R330.99</Text>
        <Text style={styles.menuDescription}>
          Succulent pork spare ribs marinated in our great-tasting basting.
        </Text>
      </View>

      {/*Desserts*/}
      <Text style={styles.sectionHeader}>Desserts</Text>

      <View style={styles.menuItem}>
        <Image source={require("./Images/malva.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Malva Pudding - R65.99</Text>
        <Text style={styles.menuDescription}>
          Baked sponge pudding topped with caramel syrup, served warm with vanilla soft serve.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/peppermint.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Peppermint Crisp Tart - R59.99</Text>
        <Text style={styles.menuDescription}>
          Layers of cream and caramel sauce with crushed Peppermint Crisp pieces.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/creme_brulee.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Creme Brulee - R59.99</Text>
        <Text style={styles.menuDescription}>
          Vanilla custard topped with a thin layer of caramelised sugar.
        </Text>
      </View>

      <View style={styles.menuItem}>
        <Image source={require("./Images/strawberry_cake.png")} style={styles.menuImage} />
        <Text style={styles.menuItemTitle}>Strawberry Cream Cake - R80.50</Text>
        <Text style={styles.menuDescription}>
          Layers of soft sponge, rich cream, and fresh strawberries finished with a glaze.
        </Text>
      </View>

      

      <StatusBar style="auto" />
    </ScrollView>
  );
}

//style section(layout and color design)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8cdcdff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 15,
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000ff",
  },
  
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  menuTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 30,
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e63946",
    marginTop: 20,
    marginLeft: 15,
  },
  menuItem: {
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  menuImage: {
    width: 250,
    height: 160,
    borderRadius: 10,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  menuDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
    marginTop: 3,
  },
  totalCount: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 20,
  },
  displayItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  displayText: {
    fontSize: 16,
  },
  itemList: {
    marginTop: 10,
  },
});

