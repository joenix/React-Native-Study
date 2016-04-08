/* !!
 * Import React Component
 * ----- ----- ----- ----- -----
 */
import React, {

	AppRegistry,

	Component,

	StyleSheet,

	Text,

	View,

	Navigator,

	NavigatorIOS

} from 'react-native';


/* !!
 * Constant Component
 * ----- ----- ----- ----- -----
 */
import Home from './app/component/Home.js';

import Publish from './app/component/Publish.js';


/* !!
 * Constant Const
 * ----- ----- ----- ----- -----
 */
const $ = {};


/* !!
 * Application
 * ----- ----- ----- ----- -----
 */
class App extends Component {

	render() {

		return (

			<Navigator

				// 路由参数
				initialRoute = {{

					title: '首页',

					page: Home,

				}}

				// 转场动画
				configureScene = {() => {

					return Navigator.SceneConfigs.HorizontalSwipeJump;

				}}

				// 渲染场景
				renderScene = {(route, navigator) => {

					$.navigator = navigator;

					let Component = route.page;

					if( Component ) {

						return <Component route = { route } navigator = { navigator } />

					}

				}}

			/>

		);

	}

}

/* !!
 * Registry Application
 * ----- ----- ----- ----- -----
 */
AppRegistry.registerComponent('HL', () => App);