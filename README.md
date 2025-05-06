### React Native Timer App

A sleek, customizable stopwatch/timer application built with React Native. This app features an intuitive interface with animated buttons and a clean design.





## Features

- ⏱️ Precise stopwatch functionality with 0.1 second accuracy
- 🔄 Start, stop, and clear timer controls
- 👆 Interactive button animations with press effects
- 🎨 Color-coded buttons for different actions
- 📱 Responsive design that works on various screen sizes


## Installation

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- React Native development environment


### Setup

1. Clone the repository:

```shellscript
git clone https://github.com/yourusername/react-native-timer.git
cd react-native-timer
```


2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Start the development server:

```shellscript
npm start
# or
yarn start
```


4. Run on your device or emulator:

```shellscript
# For iOS
npm run ios
# or
yarn ios

# For Android
npm run android
# or
yarn android
```




## Usage

- **Start/Stop**: Press the green "Start" button to begin the timer. The button will change to "Stop" when the timer is running. Press again to stop.
- **Clear**: Press the red "Clear" button to reset the timer to 0.0.
- **Visual Feedback**: Buttons provide visual feedback when pressed, changing color and slightly scaling down.


## Project Structure

```plaintext
react-native-timer/
├── assets/
│   └── cronometro.png       # Timer image
├── components/
│   └── button.tsx           # Custom button component
├── App.tsx                  # Main timer component
├── package.json
└── README.md
```

## Component Details

### App Component

The main timer component that manages the stopwatch functionality:

- Uses React's class component structure with TypeScript
- Maintains timer state including current time and timer status
- Handles timer logic with setInterval for accurate timing
- Renders the UI with the timer display and control buttons


### CustomButton Component

A reusable button component with interactive effects:

- Changes appearance based on button type (Clear, Start, Stop)
- Implements press animations for better user feedback
- Uses React hooks for managing press state
- Supports custom styling based on button purpose


## Technologies Used

- React Native
- TypeScript
- React Hooks
- React Native Animated API (for button animations)


## Implementation Details

### Timer Logic

The timer uses JavaScript's `setInterval` to update the timer value every 100ms (0.1 seconds):

```typescript
const timer = setInterval(() => {
  this.setState({
    clockNumber: this.state.clockNumber + 0.1,
  });
}, 100);
```

### Button Animations

The custom buttons use React's useState hook to track press state and apply visual changes:

```typescript
const [isPressed, setIsPressed] = useState(false);
```

Different styles are applied based on both the button type and press state.

## Future Improvements

- Add lap time functionality
- Implement a countdown timer option
- Add sound effects for button presses and timer completion
- Support for dark/light theme
- Add persistence to remember the timer state between app launches
- Implement more advanced animations and transitions


## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

*This README was last updated on May 6, 2024*
