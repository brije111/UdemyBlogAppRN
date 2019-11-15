import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList } from 'react-native-gesture-handler';
import BlogPost from '../interface/BlogPost';
import { ADD_BLOG, DELETE_BLOG } from '../actions';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = () => {
    //const value = useContext(BlogContext);
    const { blogPosts, dispatch } = useContext(BlogContext);

    const onAdd = () => dispatch({ type: ADD_BLOG, payload: { id: blogPosts.length + 1, title: `Blog Post #${blogPosts.length + 1}` } });
    const onDelete = (item: BlogPost) => dispatch({ type: DELETE_BLOG, payload: item });

    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <Button title='Add Post'
                onPress={onAdd} />
            <FlatList
                data={blogPosts}
                keyExtractor={blogPost => blogPost.id.toString()}
                renderItem={({ item }) => <View style={style.view}>
                    <Text style={{ alignSelf: "stretch" }}>{(item as BlogPost).title}</Text>
                    <MaterialIcons style={{ alignSelf: "flex-end" }} name="delete" size={32}
                        onPress={() => onDelete(item)} />
                </View>} />
        </View>
    );
}

const style = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default IndexScreen;