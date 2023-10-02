import React, { useRef } from "react";
import {
  Animated,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";

export default function AnimatedTouchableText({
  touchableOnPress,
  touchableStyle,
  touchableTextStyle,
  textStyle,
  textTouchable,
  text,
}) {
  const value = useRef(new Animated.Value(0));

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          touchableOnPress();
          value.current.setValue(0);
          const animation = Animated.timing(value.current, {
            toValue: 1,
            useNativeDriver: true,
          });
          animation.start();
        }}
      >
        <View
          style={{
            // width: Dimensions.get("window").width < 600 ? "80%" : 150,
            width: "100%",
            borderColor: "#ecf0f1",
            borderWidth: 1,
            borderRadius: 3,
          }}
        >
          <View style={touchableStyle}>
            <Text style={touchableTextStyle}>{textTouchable}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Animated.Text
        style={{
          ...textStyle,
          opacity: value.current,
          height: Dimensions.get("window").height / 4,
        }}
      >
        {text}
      </Animated.Text>
    </>
  );
}
