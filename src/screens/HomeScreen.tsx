import { StyleSheet, Text, ScrollView, RefreshControl, View, Image } from 'react-native'
import React, { FC, useCallback, useContext, useEffect, useState } from 'react'
import { ServiceContext } from '../context/ServiceContext';
import { FlatList } from 'react-native-gesture-handler';
import PostCard from '../components/PostCard';
import { ActivityIndicator } from 'react-native-paper';

const HomeScreen: FC = () => {

  const [refreshing, setRefreshing] = useState(false)
  const { posts, fetchPosts, fetchMorePosts } = useContext(ServiceContext)

  useEffect(() => {
    fetchPosts()
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchPosts()
    setTimeout(() => {
      setRefreshing(false)
    }, 200);
  }, []);

  return (
    <View style={styles.container}>
      {posts && posts.result.length > 0 ?
        <FlatList
          style={styles.flatList}
          data={posts.result}
          renderItem={
            ({ item, index }) =>
              <PostCard
                title={item.title}
                summary={item.summary}
                image={item.banner}
                index={index}
                totalReadingTime={item.totalReadingTime} />
          }
          keyExtractor={item => item.postId.toString()}
          onEndReached={fetchMorePosts}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        :
        <ActivityIndicator />
      }
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  flatList: {
    padding: 10
  }
})

export default HomeScreen

