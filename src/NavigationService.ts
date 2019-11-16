import { NavigationActions, NavigationContainerComponent } from 'react-navigation';
import BlogPost from './interface/BlogPost';

let _navigator: NavigationContainerComponent;

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    _navigator = navigatorRef;
}

function navigate(routeName: string, params: BlogPost) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
};