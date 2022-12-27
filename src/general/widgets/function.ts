const FocusedColor = ({
  typeBox,
  focusBox,
  focusedColor,
  unFocusedColor,
}: {
  typeBox: string;
  focusBox: string;
  focusedColor: string;
  unFocusedColor: string;
}) => {
  return typeBox === focusBox ? focusedColor : unFocusedColor;
};

const FocusedColorBoxEmail = (color1: any, color2: any, focusBox: any) =>
  FocusedColor({
    typeBox: 'emailBox',
    focusBox: focusBox,
    focusedColor: color1,
    unFocusedColor: color2,
  });

const FocusedColorBoxPass = (color1: any, color2: any, focusBox: any) =>
  FocusedColor({
    typeBox: 'passBox',
    focusBox: focusBox,
    focusedColor: color1,
    unFocusedColor: color2,
  });

export {FocusedColor, FocusedColorBoxEmail, FocusedColorBoxPass};
