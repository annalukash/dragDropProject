import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { DraxView } from 'react-native-drax';

const { width } = Dimensions.get('window');

const DragUIComponent = ({ item, index }) => {
  return (
    <DraxView
      style={[
        styles.centeredContent,
        styles.draggableBox,
        { backgroundColor: item.background_color },
      ]}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={index}
      longPressDelay={150}>
      <Text style={styles.textStyle}>{item.name}</Text>
    </DraxView>
  );
};

const styles = StyleSheet.create({
  centeredContent: {
    borderRadius: 10,
  },
  draggableBox: {
    width: width / 4 - 12,
    height: width / 4 - 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  dragging: {
    opacity: 0.2,
  },
  textStyle: {
    fontSize: 18,
  },
});

export default DragUIComponent;
