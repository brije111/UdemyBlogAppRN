import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import BlogPost from '../interface/Contact';
import { UPDATE_BLOG, READ_CONTACTS } from '../actions';
import { NavigationStackProp } from 'react-navigation-stack/lib/typescript/types';
//import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
    navigation: NavigationStackProp<{ blogId: number }>;
};

const EditScreen = (props: Props) => {
    const id = props.navigation.getParam('blogId');
    //console.log(id);
    const { blogPosts, dispatch } = useContext(BlogContext);
    //dispatch({ type: READ_BLOG, payload: { id: id } });
    const getBlogPost = (): BlogPost | undefined => {
        let blogPost: BlogPost | undefined;
        blogPosts.forEach(element => {
            if (element.id === id) {
                blogPost = element;
                return false;
            }
        });
        return blogPost;
    }
    const blogPost = getBlogPost();
    const [text, setText] = useState(blogPost.title);
    const onEdit = () => {
        blogPost.title = text;
        dispatch({ type: UPDATE_BLOG, payload: blogPost });
    }
    return (
        <View>
            <Text>
                Edit Screen
            </Text>
            <TextInput value={text} onChangeText={text => setText(text)} />
            <Button title='save' onPress={onEdit} />
        </View>
    )
}

export default EditScreen;
