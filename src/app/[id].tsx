import { View, Text } from "react-native";
import React from "react";
import { ColorProperties } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: "green", fontSize: 20 }}>
        ProductDetailsScreen for id: {id}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;
