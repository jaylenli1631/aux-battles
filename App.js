import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import FadeInView from "./src/components/animated/FadeInView";
import AnimatedTouchableText from "./src/components/animated/AnimatedTouchableText";
import {
  useFonts,
  MajorMonoDisplay_400Regular,
} from "@expo-google-fonts/major-mono-display";
import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
} from "@expo-google-fonts/space-mono";

import generateSentence from "./src/functions/generateSentences";
import generateSentenceTest from "./src/functions/generateSentenceTest";
import genSongArtist from "./src/functions/getSongArtist";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtD8EWyzqwZpspK--dt_tMe5zMaVy64_I",
  authDomain: "aux-battles.firebaseapp.com",
  projectId: "aux-battles",
  storageBucket: "aux-battles.appspot.com",
  messagingSenderId: "620908013254",
  appId: "1:620908013254:web:b07a537e74ed17e6e159c7",
  measurementId: "G-4P9BKPZXKB",
};

// Initialize Firebase
if (Platform.OS == "web") {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
// export default function App() {
const App = () => {
  // manage state
  const [situation, setSituation] = useState("");

  // font stuff
  let [fontsLoaded] = useFonts({
    MajorMonoDisplay_400Regular,
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
    SpaceMono_700Bold,
    SpaceMono_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  // done w font stuff

  // situation getter function
  const generateSituation = () => {
    // const sentence = generateSentence();
    // const sentence = generateSentenceTest();
    const sentence =
      Math.random() < 0.25 ? genSongArtist() : generateSentence();

    if (Platform.OS == "web") {
      // logEvent(analytics, "button_click", { name: "generate" });
    }
    setSituation(sentence);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        click a button. prove your music taste superiority.
      </Text>

      <AnimatedTouchableText
        touchableOnPress={generateSituation}
        touchableStyle={styles.button}
        touchableTextStyle={styles.buttonText}
        textStyle={styles.bodyText}
        textTouchable={"i'm ready"}
        text={situation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    // alignItems: "flex-start",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#ecf0f1",
    fontFamily: "SpaceMono_400Regular",
    marginHorizontal: 40,
    marginBottom: 40,
    marginTop: "7.5%",
  },
  button: {
    // alignSelf: Dimensions.get("window").width < 600 ? "left" : "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#82ccdd",
    borderColor: "#192a56",
    borderBottomWidth: 6,
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 15,
    shadowColor: "#f5f6sfa",
    shadowOffset: { width: -3, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    borderRadius: 3,
    width: "100%",

    // marginVertical: 30,
  },
  buttonText: {
    fontSize: 16,
    color: "#192a56",
    fontFamily: "SpaceMono_400Regular",
  },
  bodyText: {
    fontSize: 20,
    color: "#487eb0",
    fontFamily: "SpaceMono_400Regular",
    // paddingHorizontal: 80,
    marginHorizontal: Dimensions.get("window").width < 600 ? 40 : 80,
    // paddingHorizontal: Dimensions.get("window").width < 600 ? 40 : 80,
    marginTop: 40,
  },
});

export default App;
