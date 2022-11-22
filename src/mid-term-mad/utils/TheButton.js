import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TheButton = ({title, onPress, style = {StyleSheet}}) => {
  // console.log(style);
  return (
    <View style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TheButton;

const styles = StyleSheet.create({
  body: {alignItems: 'center'},
  button: {
    backgroundColor: '#bde0fe',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 100,
    minHeight: 30,
  },
  text: {
    // margin: 10,
    padding: 10,
  },
});
