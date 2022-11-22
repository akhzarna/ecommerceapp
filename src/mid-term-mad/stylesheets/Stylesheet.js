import {StyleSheet} from 'react-native';

export const theStyle = StyleSheet.create({
  headingSize: {
    fontSize: 30,
    // backgroundColor: 'red',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 13,
  },

  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  spaceIn: {
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    alignItems: 'center',
    // justifyContent: 'center',
  },
  padding: {
    padding: 5,
  },
  dp: {
    aspectRatio: 1 / 1,
    // height: 20,
    // width: 20,
    borderWidth: 1,
    borderRadius: 50,
  },
});
