import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Chart from './Chart';

const CryptoCurrencySelector = () => {
    const [selectedCrypto, setSelectedCrypto] = useState('BTC');
    const [cryptoValue, setCryptoValue] = useState('BTC');

    useEffect(() => {
        // Fetch cryptocurrency value from Binance API
        const fetchCryptoValue = async () => {
            try {
                const response = await fetch(
                    `https://api.binance.com/api/v3/ticker/price?symbol=${selectedCrypto}USDT`
                );
                const data = await response.json();
                setCryptoValue(parseFloat(data.price).toFixed(2));
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedCrypto) {
            fetchCryptoValue();
        }
    }, [selectedCrypto]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Select a Cryptocurrency</Text>
            <View style={styles.picker}>
                <Picker style={styles.pickerinside}
                    selectedValue={selectedCrypto}
                    onValueChange={(itemValue) => setSelectedCrypto(itemValue)}
                >
                    <Picker.Item label="Bitcoin" value="BTC" />
                    <Picker.Item label="Ethereum" value="ETH" />
                    <Picker.Item label="Litecoin" value="LTC" />
                </Picker>
            </View>
            {cryptoValue !== null && (
                <Text style={styles.valueText}>Current Value: ${cryptoValue}</Text>
            )}
            <Text style={styles.chartTitle}>Daily values chart </Text>
            <Chart selectedCrypto={selectedCrypto} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    valueText: {
        fontSize: 18,
        marginTop: 16,
    },
    chartTitle: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    picker: {
        width: 300,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'black',
        backgroundColor: 'white',
        color: '#20232a',
        overflow: 'hidden',
    },
});

export default CryptoCurrencySelector;