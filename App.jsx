import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SingleReviewView from './src/screens/components/SingleReviewView';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultsShowScreen,
    Review: SingleReviewView,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Foodie',
    },
  }
);

export default createAppContainer(navigator);
