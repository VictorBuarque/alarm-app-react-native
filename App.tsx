
import { Component } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
interface TimerProps {
  initialTime?: number | string;
}
interface TimerState {
  timer?: number | string;
  imageSource: ImageSourcePropType;
}
export default class App extends Component< TimerProps, TimerState> {
  private clock = require("./assets/cronometro.png");
  constructor(props: TimerProps) {
    super(props);
    this.state = { timer: props.initialTime, imageSource: this.clock };
    this.start = this.start.bind(this);
  }
  start(): void {
    const newTime = parseFloat(this.state.timer) + 0.1;
    this.setState({ timer: newTime.toFixed(1) });
    setTimeout(this.start, 100);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Timer</Text>
        <Image source={this.state.imageSource} style={styles.image} />
        <Text style={styles.text}>0.0</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.start}
        >
          <View style={styles.buttonArea}>
            <Text style={styles.text}>Start!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  button: {
    backgroundColor: "#green",
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonArea: {
    backgroundColor: "white",
    padding: 20,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 100,
    width: "100%",
    height: 84,
    justifyContent: "center",
    alignItems: "center",
  },
});
