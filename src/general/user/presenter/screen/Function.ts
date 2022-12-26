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

export {FocusedColor};
