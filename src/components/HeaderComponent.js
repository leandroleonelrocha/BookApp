import React from 'react';
import {View,Text} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../constants';


export default function HeaderComponent(){


    return (
        <View style={{ height: 200, borderWidth: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderBottomColor: 'red', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                <View style={{ flex: 1}}>
                    <View>
                        <Text style={{ color: COLORS.white }}>Good Morning</Text>
                    </View>
                </View>
            </View>
        </View>

    )

}