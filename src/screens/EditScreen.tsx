import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { UPDATE_BLOG } from '../actions';

// interface Props {
//     blogPost?: BlogPost;
// }

class EditScreen extends React.Component {
    render() {
        const { dispatch } = useContext(BlogContext);
        const [text, setText] = useState(this.props.navigation);
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
}

export default EditScreen;
