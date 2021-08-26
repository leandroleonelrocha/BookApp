import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

export default function MyCarousel() {

    return (
        <Carousel
          layout={'default'}
          data={data}
          renderItem={(item) => <RenderItem data={item} />}
          sliderWidth={width}
          itemWidth={ITEM_WIDTH}
        />
    );


}

function RenderItem(props) {
    const {data} = props;
  
    const { id,title, poster_path, genre_ids} = data.item;
    const [genres, setGenres] = useState(null);
    const imgUrl = `${URL_IMG}/w500${poster_path}`;
  
  
    return (
    
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: imgUrl}} />
        </View>
    )
}