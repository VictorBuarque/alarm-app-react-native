import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const getButtonStyle = () => {
    switch (title) {
      case "Clear":
        return styles.clearButton;
      case "Start":
        return styles.startButton;
      case "Stop":
        return styles.stopButton;
      default:
        return styles.defaultButton;
    }
  };

  const getPressedButtonStyle = () => {
    switch (title) {
      case "Clear":
        return styles.clearButtonPressed;
      case "Start":
        return styles.startButtonPressed;
      case "Stop":
        return styles.stopButtonPressed;
      default:
        return styles.defaultButtonPressed;
    }
  };

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[
        styles.button,
        getButtonStyle(),
        isPressed && getPressedButtonStyle(),
      ]}
    >
      <Text style={[styles.text, isPressed && styles.textPressed]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
    marginHorizontal: 8,
  },
  defaultButton: {
    backgroundColor: "#3498db",
  },
  defaultButtonPressed: {
    backgroundColor: "#2980b9",
    transform: [{ scale: 0.98 }],
  },
  clearButton: {
    backgroundColor: "#f39c12",
  },
  clearButtonPressed: {
    backgroundColor: "#d35400",
    transform: [{ scale: 0.98 }],
  },
  startButton: {
    backgroundColor: "#2ecc71",
  },
  startButtonPressed: {
    backgroundColor: "#27ae60",
    transform: [{ scale: 0.98 }],
  },
  stopButton: {
    backgroundColor: "#e74c3c",
  },
  stopButtonPressed: {
    backgroundColor: "#c0392b",
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textPressed: {
    color: "#f0f0f0",
  },
});
