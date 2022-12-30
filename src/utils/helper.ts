import Toast from 'react-native-toast-message';

const showToast = ({msg, type}: {msg: string; type: string}) => {
  Toast.show({
    type: type,
    text1: msg,
  });
};

export {showToast};
