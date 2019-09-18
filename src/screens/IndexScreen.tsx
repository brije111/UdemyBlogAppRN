import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import BlogPost from '../interface/BlogPost';

const IndexScreen = () => {
    //const value = useContext(BlogContext);
    const {blogPosts, addBlogPost} = useContext(BlogContext);
    console.log(blogPosts, addBlogPost);
    
    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={blogPosts}
                keyExtractor={blogPost => (blogPost as BlogPost).title}
                renderItem={({ item }) => <Text>{(item as BlogPost).title}</Text>} />
        </View>
    );
}

const style = StyleSheet.create({

});

export default IndexScreen;