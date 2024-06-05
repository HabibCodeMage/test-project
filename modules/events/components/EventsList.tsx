import ImageCard from '@/modules/common/components/ImageCard';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { rem } from '@/modules/common/utils';
import useEvents from '../hooks/useEvents';

const EventsList: React.FC = () => {
  const events = useEvents();

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => (
        <ImageCard heading={item.heading} image={item.icon} rootStyles={{width: rem(323), minHeight: rem(206)}} yValue={80} />
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

export default EventsList;
