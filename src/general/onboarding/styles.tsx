import {StyleSheet} from 'react-native';
import Color from '../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.while,
  },
  viewList: {
    flex: 6,
    marginTop: 30,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 170,
    width: 150,
  },
  viewLogo: {
    flex: 8,
  },
  viewLoading: {
    flex: 2,
    alignItems: 'center',
  },
  loading: {
    height: 70,
    width: 70,
  },
  image: {
    height: 300,
    width: 300,
  },
  viewContent: {
    flex: 0.5,
  },
  content: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Color.violet,
    height: 50,
    borderRadius: 100,
    shadowColor: Color.violet,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 10,
    },
  },
  textButton: {
    color: Color.while,
    fontWeight: 'bold',
  },
  viewPaginator: {
    flexDirection: 'row',
    flex: 1,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: Color.violet,
  },
  size80: {
    width: '80%',
  },
});

export default styles;
