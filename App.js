import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxList } from 'react-native-drax';
import draggableItemList from './src/data/draggableItemList';
import mainReceivingItemList from './src/data/mainReceivingItemList';
import ReceivingZoneUIComponent from './src/components/ReceivingZoneUIComponent';
import DragUIComponent from './src/components/DragUIComponent';

const gestureRootViewStyle = { flex: 1 };

export default function App() {
  const [receivingItemList, setReceivedItemList] = useState(
    mainReceivingItemList,
  );
  const [dragItemMiddleList, setDragItemListMiddle] =
    useState(draggableItemList);

  const FlatListItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={gestureRootViewStyle}>
        <View>
          <Text style={styles.headerStyle}>
            {'Drag drop and swap between lists'}
          </Text>
        </View>
        <DraxProvider>
          <View style={styles.container}>
            <View style={styles.receivingContainer}>
              {receivingItemList.map((item, index) => (
                <ReceivingZoneUIComponent
                  key={index}
                  index={index}
                  item={item}
                  dragItemMiddleList={dragItemMiddleList}
                  receivingItemList={receivingItemList}
                  setReceivedItemList={setReceivedItemList}
                  setDragItemListMiddle={setDragItemListMiddle}
                />
              ))}
            </View>
            <View style={styles.dragListContainer}>
              <DraxList
                data={dragItemMiddleList}
                renderItemContent={({ item, index }) => (
                  <DragUIComponent item={item} index={index} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4}
                ItemSeparatorComponent={FlatListItemSeparator}
                scrollEnabled={true}
              />
            </View>
          </View>
        </DraxProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  itemSeparator: {
    height: 15,
  },
  dragListContainer: {
    padding: 5,
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    textAlign: 'center',
  },
});
