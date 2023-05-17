import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NavigationConstants from './NavigationConstants';
import BlogDetail from '../screens/BlogDetail';
import { Ionicons } from '@expo/vector-icons';


const StackNavigator: FC = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={NavigationConstants.home}
                component={HomeScreen}
                options={{
                    title: "Maestro Blog"
                }} />
            <Stack.Screen
                name={NavigationConstants.blogDetail} component={BlogDetail} 
                options={{
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                    headerTitle: '',
                    headerBackImage: () => (
                        <View style={styles.backButton}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </View>
                    ),
                }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    backButton: {
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 10
    }
})


export default StackNavigator
