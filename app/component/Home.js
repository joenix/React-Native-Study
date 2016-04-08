import React, {

	Component,

	StyleSheet,

	Text,

	View

} from 'react-native';

const sheet = StyleSheet.create({

	board: {

		flex: 1,

		justifyContent: 'center',

		alignItems: 'center'

	},

	info: {

    	textAlign: 'center',

    	fontSize: 30

	}

});

class Main extends Component {

	onPress() {

		const { navigator } = this.props;

		console.log(111, navigator, 222);

	}

	render() {

		return (

			<View style = { sheet.board } >

				<Text style = { sheet.info } onPress = {this.onPress} >Page Home</Text>

			</View>

		);

	}

}

module.exports = Main;