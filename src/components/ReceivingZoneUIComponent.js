import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { DraxView } from 'react-native-drax';

const ReceivingZoneUIComponent = ({
  item,
  index,
  dragItemMiddleList,
  receivingItemList,
  setReceivedItemList,
  setDragItemListMiddle,
}) => {
  return (
    <DraxView
      style={[
        styles.centeredContent,
        styles.receivingZone,
        { backgroundColor: item.background_color },
      ]}
      receivingStyle={styles.receiving}
      renderContent={() => (
        <View>
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
      )}
      key={index}
      onReceiveDragDrop={(event) => {
        let selected_item = dragItemMiddleList[event.dragged.payload];
        let newReceivingItemList = [...receivingItemList];
        newReceivingItemList[index] = selected_item;
        setReceivedItemList(newReceivingItemList);
        let newDragItemMiddleList = [...dragItemMiddleList];
        newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
        setDragItemListMiddle(newDragItemMiddleList);
      }}
    />
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: Dimensions.get('window').width / 4 - 12,
    borderRadius: 10,
    width: Dimensions.get('window').width / 4 - 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  textStyle: {
    fontSize: 18,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default ReceivingZoneUIComponent;
