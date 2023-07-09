import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chart = ({ selectedCrypto }) => {
    const [cryptoHistory, setCryptoHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCryptoHistory = async () => {
            try {
                const response = await fetch(
                    `https://api.binance.com/api/v3/klines?symbol=${selectedCrypto}USDT&interval=1d&limit=30`
                );
                const data = await response.json();
                const formattedData = data.map((item) => parseFloat(item[4]));
                setCryptoHistory(formattedData);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedCrypto) {
            fetchCryptoHistory();
        }
    }, [selectedCrypto]);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <LineChart
                    data={{
                        labels: [],
                        datasets: [
                            {
                                data: cryptoHistory,
                            },
                        ],
                    }}
                    width={Dimensions.get('window').width - 32}
                    height={200}
                    yAxisLabel="$"
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: '#fff',
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            )}
        </View>
    );
};

export default Chart;