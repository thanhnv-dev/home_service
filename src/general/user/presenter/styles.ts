import {StyleSheet} from 'react-native';
import Color from '~/constants/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  childContainer: {
    marginHorizontal: 20,
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
    marginHorizontal: 20,
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
  viewChange: {
    flex: 24,
  },
  viewChange2: {
    flex: 1,
  },
  viewTitleIconBack: {
    flex: 5,
    marginTop: 30,
    justifyContent: 'space-around',
  },
  viewInputSubmit: {
    flex: 6,
  },
  viewInput: {
    flex: 4,
    justifyContent: 'space-around',
  },
  viewButtonSign: {
    flex: 4,
    justifyContent: 'space-around',
  },
  viewOrWith: {
    flex: 4,
    flexDirection: 'row',
  },
  viewButtonSignWith: {
    flex: 2.5,
    flexDirection: 'row',
  },
  viewButtonText: {
    flex: 4.5,
    flexDirection: 'row',
  },
  viewIconBack: {
    width: 30,
    height: 30,
    backgroundColor: Color.while,
  },
  textTitle: {
    fontSize: 45,
    fontWeight: '700',
  },
  viewIconCheck: {
    height: 20,
    width: 20,
    borderRadius: 5,
    borderWidth: 2.3,
    borderColor: Color.violet,
  },
  viewRemember: {
    flexDirection: 'row',
  },
  textForgot: {
    color: Color.violet,
  },
  viewForgot: {
    alignItems: 'center',
  },
  iconInput: {
    width: 20,
    height: 20,
  },
  iconBack: {
    width: 30,
    height: 30,
  },
  iconChecked: {
    height: 16,
    width: 16,
  },
  viewTitleWithIconBack: {
    marginTop: 30,
  },
  viewTitle2: {
    marginTop: 50,
    marginBottom: 20,
  },
  boxInput: {
    height: 70,
  },
  ml20: {
    marginLeft: 20,
  },
});

export default styles;
