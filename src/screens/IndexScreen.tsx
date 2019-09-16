import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import BlogPost from '../interface/BlogPost';

const IndexScreen = () => {
    const value = useContext(BlogContext);
    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <FlatList
                data={JSON.parse(value)}
                keyExtractor={blogPost => (blogPost as BlogPost).title}
                renderItem={({ item }) => <Text>{(item as BlogPost).title}</Text>} />
        </View>
    );
}

const style = StyleSheet.create({

});

export default IndexScreen;