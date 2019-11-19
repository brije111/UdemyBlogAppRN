import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import BlogPost from '../interface/Contact';
import { ADD_BLOG } from '../actions';
import { NavigationStackProp } from 'react-navigation-stack/lib/typescript/types';

interface Props {
    navigation: NavigationStackProp<{}>;
};

export const CreateBlog = ({ navigation }: Props) => {
    const { blogPosts, dispatch } = useContext(BlogContext);
    const [text, setText] = useState('');
    const onSubmit = () => {
        const blogPost: BlogPost = {
            id: blogPosts.length + 1,
            title: text
        };
        dispatch({ type: ADD_BLOG, payload: blogPost });
    }
    return (
        <View>
            <Text>
                Create Screen
            </Text>
            <TextInput value={text} onChangeText={text => setText(text)} />
            <Button title='submit' onPress={onSubmit} />
        </View>
    )
}
