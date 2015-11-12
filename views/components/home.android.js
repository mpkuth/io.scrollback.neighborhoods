import React from "react-native";
import Colors from "../../colors.json";
import Modal from "./modal";
import KeyboardSpacer from "./keyboard-spacer";
import VersionCodes from "../../modules/version-codes";
import renderNavigationBar from "../utils/render-navigation-bar";
import renderScene from "../utils/render-scene";
import routes from "../utils/routes";

const {
	Platform,
	StyleSheet,
	Navigator,
	View
} = React;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	statusbar: {
		height: Platform.Version < VersionCodes.KITKAT ? 0 : 25, // offset for statusbar height
		backgroundColor: Colors.primary
	},
	scene: {
		marginTop: 56, // offset for appbar height
		backgroundColor: Colors.lightGrey
	}
});

export default class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.statusbar} />

				<Navigator
					initialRoute={this.props.initialRoute || routes.home()}
					renderScene={renderScene}
					navigationBar={renderNavigationBar()}
					sceneStyle={styles.scene}
				/>

				<KeyboardSpacer />
				<Modal />
			</View>
		);
	}
}

Home.propTypes = {
	initialRoute: React.PropTypes.object
};
