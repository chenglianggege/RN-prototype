import React, {Component} from 'react';
import {
	StyleSheet,
	Text, 
	Image,
	View,
	StatusBar,
	Platform,
} from 'react-native';
import PropTypes from 'prop-types';
const NAV_BARHEIGHT_IOS = 44;
const NAV_BARHEIGHT_ANDROID = 50;
const STATUS_BAR_HEIGHT = 20;  //状态条的高度
const StatusBarShape = {
	backgroundColor:PropTypes.string,
	barStyle:PropTypes.oneOf(['default', 'light-content', 'dark-content']),
	hidden: PropTypes.bool,
}
export default class NavigationBar extends Component{
	static propTypes = {
		style: PropTypes.object,
		title: PropTypes.string,
		titleView: PropTypes.element,
		hide: PropTypes.bool,
		statusBar: PropTypes.shape(StatusBarShape),
		rightButton: PropTypes.element,
		leftButton: PropTypes.element,
	}
	static defaultProps = {
		statusBar: {
			barStyle: 'light-content',
			hidden: false,
		},
	}
	constructor(props){
		super(props);
		this.state={
			title:'',
			hide:false,
		}
	}
	render(){
		let status = <View style={[styles.statusBar,this.props.statusBar]}>
				<StatusBar {...this.props.statusBar}/>
			</View>
		let titleView = this.props.titleView?this.props.titleView:<Text style={styles.title}>{this.props.title}</Text>
			
		let content = <View style={styles.navBar}>
			{this.props.leftButton}
			<View style={styles.titleViewContainer}>
				{titleView}
			</View>
			{this.props.rightButton}
		</View>
		return(
			<View style={[styles.container,this.props.style]}>
				{status}
				{content}
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container:{
		backgroundColor:'#EE6363',
	},
	navBar:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		height:(Platform.OS === 'ios')?NAV_BARHEIGHT_IOS:NAV_BARHEIGHT_ANDROID,
	},
	titleViewContainer:{
		justifyContent:'center',
		alignItems:'center',
		position:'absolute',
		left:40,
		right:40,
		top:0,
		bottom:0
	},
	title:{
		fontSize:20,
		color:'white'
	},
	statusBar:{
		height:(Platform.OS === 'ios')? STATUS_BAR_HEIGHT:0,
	}
})
