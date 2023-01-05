import {Icon, Layout} from '@ui-kitten/components';
import React from 'react';

const EyeIcon = ({style, color}: {color: any; style: any}) => (
  <Icon name="eye-outline" fill={color} style={style} />
);
const EyeOffIcon = ({style, color}: {color: any; style: any}) => (
  <Icon name="eye-off-outline" fill={color} style={style} />
);
const IconEmail = ({style, color}: {color: any; style: any}) => (
  <Icon name="eye-off-outline" fill={color} style={style} />
);
const IconLock = ({style, color}: {color: any; style: any}) => (
  <Icon name="lock-outline" fill={color} style={style} />
);
const IconBack = ({style, color}: {color: any; style: any}) => (
  <Layout>
    <Icon name="arrow-back-outline" fill={color} style={style} />
  </Layout>
);
const IconCheck = ({style, color}: {color: any; style: any}) => (
  <Icon name="checkmark-outline" fill={color} style={style} />
);

export {EyeIcon, EyeOffIcon, IconBack, IconEmail, IconLock, IconCheck};
