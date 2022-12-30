const FocusedColorBoxEmail = ({
  color1,
  color2,
  focusBox,
}: {
  color1: any;
  color2: any;
  focusBox: any;
}) => {
  return focusBox === 'emailBox' ? color1 : color2;
};

const FocusedColorBoxPass = ({
  color1,
  color2,
  focusBox,
}: {
  color1: any;
  color2: any;
  focusBox: any;
}) => {
  return focusBox === 'passBox' ? color1 : color2;
};

export {FocusedColorBoxEmail, FocusedColorBoxPass};
