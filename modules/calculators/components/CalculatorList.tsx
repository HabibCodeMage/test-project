import React from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorCard from './CalculatorCard';
import useCalculators from '../hooks/useCalculators';
import { FlatList } from 'react-native-gesture-handler';

const CalculatorList: React.FC = () => {
  const calculators = useCalculators();

  return (
    <FlatList
      data={calculators}
      renderItem={({ item }) => (
        <CalculatorCard heading={item.heading} Icon={item.icon} />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      contentContainerStyle={styles.listContent}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemSeparator: {
    width: 16,
  },
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 4,
    padding: 16,
  },
  heading: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalculatorList;
