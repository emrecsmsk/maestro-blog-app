import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import React, { FC, useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import HTML from 'react-native-render-html';
import { useRoute } from '@react-navigation/native';
import { ServiceContext } from '../context/ServiceContext';


const BlogDetail: FC = () => {

    const route = useRoute<any>()
    const index: number = route.params.index
    const { posts } = useContext(ServiceContext)

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: posts?.result[index].image }} />
            <View style={styles.textView}>
                <HTML source={{ html: posts!.result[index].content! }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    },
    textView: {
        padding: 10
    }
})

export default BlogDetail


