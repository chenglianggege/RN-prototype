import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import HomePage from './HomePage'
import NavigationBar from '../common/NavigationBar'
/*<NavigationBar
				title={'欢迎'}
			/>*/
export default class WelcomePage extends Component{
	componentDidMount(){
		this.timer=setTimeout(()=>{
			this.props.navigator.resetTo({
				component:HomePage
			})
		},2000);
	}
	componentWillUnmount(){
		this.timer&&clearTimeout(this.timer);
	}
	render(){
		return <View>
			<NavigationBar
				title={'欢迎'}
			/>
			<Text>title</Text>
		</View>
	}
}
