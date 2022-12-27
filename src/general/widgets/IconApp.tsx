import React from 'react';
import {Icon, Layout} from '@ui-kitten/components';

const IconApp = ({
  name,
  fill,
  style,
}: {
  name: string;
  fill: any;
  style: any;
}) => (
  <Layout>
    <Icon name={name} fill={fill} style={style} />
  </Layout>
);
export default IconApp;
