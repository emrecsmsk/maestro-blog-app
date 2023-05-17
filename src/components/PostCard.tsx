import { StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import NavigationConstants from '../navigation/NavigationConstants'

interface PostCardProps {
    title: string,
    summary: string,
    image: string,
    index: number,
    totalReadingTime: number
}
const PostCard: FC<PostCardProps> = ({ title, summary, image, index, totalReadingTime }) => {

    const navigation = useNavigation<any>()

    const selectCard = () => {
        navigation.navigate(NavigationConstants.blogDetail, { index })
    }

    return (
        <Card onPress={selectCard} style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.summary}>{summary}</Text>
                <Text style={styles.totalReadingTime}>Total reading time: {totalReadingTime} minute</Text>
            </Card.Content>
            <Card.Cover source={{ uri: image }} />
        </Card>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    summary: {
        fontSize: 14,
        marginBottom: 5
    },
    totalReadingTime: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
    }
})


export default PostCard
