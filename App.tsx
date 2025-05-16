import { Component } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "./button";

interface TimerProps {
  initialTime?: number | string;
}
interface TimerState {
  clockNumber: number;
  timer: any;
  lastTime: number;
  imageSource: ImageSourcePropType;
  button: string;
}
export default class App extends Component<TimerProps, TimerState> {
  private clock = require("./assets/cronometro.png");

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      clockNumber: 0,
      imageSource: this.clock,
      button: "Start",
      timer: null,
      lastTime: 0,
    };
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start(): void {
    if (this.state.timer != null) {
      clearInterval(this.state.timer);
      this.setState({ timer: null, button: "Start" });
    } else {
      // Start timer - store the interval ID returned by setInterval
      const timer = setInterval(() => {
        this.setState({
          clockNumber: this.state.clockNumber + 0.1,
        });
      }, 100);
      this.setState({ timer: timer, button: "Stop" });
    }
  }

  clear(): void {
    if (this.state.timer != null) {
      // Stop timer
      clearInterval(this.state.timer);
    }

    this.setState({
      lastTime: this.state.clockNumber || 0,
      clockNumber: 0,
      timer: null,
      button: "Start",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Timer</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image source={this.state.imageSource} style={styles.image} />
          <Text style={styles.timer}>{this.state.clockNumber.toFixed(1)}</Text>
          <View style={styles.header}>
            <Text style={styles.text}>Last Time: {this.state.lastTime.toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <CustomButton title={"Clear"} onPress={this.clear} />
          <CustomButton title={this.state.button} onPress={this.start} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 20,
  },
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  timer: {
    position: "absolute",
    top: 250,
    fontSize: 48,
    fontWeight: "bold",
    color: "green",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain", // This ensures the image is fully visible
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
  },
  buttonArea: {
    height: 80,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
