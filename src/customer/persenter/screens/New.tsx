import {View, Text} from 'react-native';
import React from 'react';
import {useSvGetListServiceQuery} from 'src/redux/query';

const New = () => {
    const {data, isLoading} = useSvGetListServiceQuery();

    console.log('renderNew');
    return (
        <View>
            <Text>New</Text>
        </View>
    );
};

export default New;
