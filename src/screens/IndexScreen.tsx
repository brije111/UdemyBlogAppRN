import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Contact from '../interface/Contact';
import { MaterialIcons } from '@expo/vector-icons';
import NavigationService from '../NavigationService';

const IndexScreen = () => {
    //const value = useContext(BlogContext);
    const { contacts, getContacts, deleteContact } = useContext(BlogContext);

    useEffect(() => {
        console.log('Index useEffect called');
        getContacts();
    }, [])

    const onAdd = () => NavigationService.navigate('Create');
    const onDelete = (id: string) => deleteContact(id);

    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <Button title='Add Post'
                onPress={onAdd} />
            <FlatList
                data={contacts}
                keyExtractor={contact => contact._id.toString()}
                renderItem={({ item }) => <TouchableOpacity onPress={() => NavigationService.navigate('Edit', { id: item._id })}>
                    <View style={style.view}>
                        <Text style={{ alignSelf: "stretch" }}>{(item as Contact).firstName}</Text>
                        <MaterialIcons style={{ alignSelf: "flex-end" }} name="delete" size={32}
                            onPress={() => onDelete(item._id)} />
                    </View>
                </TouchableOpacity>}
            />
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