import {StyleSheet} from 'react-native';
import Color from '../../../constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBack: {
    marginTop: 30,
    flex: 0.6,
  },
  viewLogo: {
    flex: 1.8,
  },
  viewTitle: {
    flex: 0.8,
  },
  viewLoginWithButtons: {
    flex: 1.8,
  },
  viewOr: {
    flex: 0.7,
    flexDirection: 'row',
  },
  viewSignInButtons: {
    flex: 0.5,
  },
  viewSignUpButton: {
    flex: 0.6,
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 20,
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: Color.border,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  fs14bold: {
    fontSize: 14,
    fontWeight: '500',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: Color.border,
    marginHorizontal: 20,
  },
  textOr: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '500',
  },
  textSignUp: {
    fontWeight: '600',
    color: Color.violet,
  },
});

export default styles;
