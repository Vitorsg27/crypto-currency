# Crypto Currency Selector

Crypto Currency Selector is a React Native app that allows users to select a cryptocurrency and fetch its value from the Binance API.

## Features

- Select from a list of popular cryptocurrencies (Bitcoin, Ethereum, Litecoin).
- Fetches the real-time value of the selected cryptocurrency from the Binance API.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/vitorsg27/crypto-currency.git
```

2. Navigate to the project directory:

```sh
cd crypto-currency
```

3. Install the dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm start
```

5. Follow the instructions in the terminal to launch the app on an emulator, simulator, or physical device.

## Dependencies

The project uses the following dependencies:

- React Native
- @react-navigation/native
- @react-navigation/stack

These dependencies are automatically installed when you run `npm install`.

## Usage

1. Launch the app on an emulator, simulator, or physical device following the installation instructions.
2. On the home screen, select a cryptocurrency from the list (Bitcoin, Ethereum, Litecoin).
3. The app will fetch the real-time value of the selected cryptocurrency from the Binance API.
4. The current value of the cryptocurrency will be displayed on the screen with two decimal places.

## Customization

- To add more cryptocurrencies to the list, open the `CryptoCurrency.js` file and modify the `Picker.Item` components in the `Picker` component.
- To customize the styles, open the `CryptoCurrency.js` file and modify the styles defined in the `styles` object.

## License

This project is licensed under the [MIT License](LICENSE).
