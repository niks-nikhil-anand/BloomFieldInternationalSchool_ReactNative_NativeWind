import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <WebView
        source={{ uri: "https://bloomfield.nexterp.in/nlp/nlp/login" }}
        className="flex-1"
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}
