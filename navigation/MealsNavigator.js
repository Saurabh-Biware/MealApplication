import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealDetailScreen from '../Screens/MealDetailScreen';
import Colors from '../constants/Colors'



const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        
    },
    MealDetail:{
        screen: MealDetailScreen
    },
},
{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitle:'A Screen'
}
}
);

export default createAppContainer(MealsNavigator);