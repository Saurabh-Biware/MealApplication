import React from 'react';
import{View, Text, StyleSheet,Platform, Button} from 'react-native';

import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoryMealScreen = props => {
   const catId =  props.navigation.getParam('categoryId')

   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return(
        <View style={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Detail Screen!" onPress={() => {
                props.navigation.navigate('MealDetail')
            }} />
        </View>
    );
};


CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId =  navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles =  StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryMealScreen;