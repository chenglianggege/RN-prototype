import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ListView, RefreshControl} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import HomePage from './HomePage'
import DataRepository from '../expand/dao/DataRepository'
import ReponsitoryCell from '../common/ReponsitoryCell'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import NavigationBar from '../common/NavigationBar'
/*<Text
				onPress={()=>{
					this.onLoad()
				}}
			>title</Text>
			<TextInput
				style={{height:40,borderWidth:1}}
				onChangeText={text=>this.text=text}
			/>
			<Text style={{height:500}}>{this.state.result}</Text>
			
			* 
			<Text style={{height:600}}>{this.state.result}</Text>
			* */
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component{
	constructor(props){
		super(props);
		this.dataRepository = new DataRepository();
		this.state={
			result:""
		}
	}
	onLoad(){
		let url = this.genUrl(this.text);
		this.dataRepository.fetchNetRepository(url)
			.then(result=>{
				this.setState({
					result:JSON.stringify(result)
				})
			})
			.catch(error=>{
				this.setState({
					result:JSON.stringify(error)
				})
			})
	}
	genUrl(key){
		return URL+key+QUERY_STR
	}
	render(){
		return (
		<View style={{flex:1}}>
			<NavigationBar
				title={'最热'}
			/>
			<ScrollableTabView
				tabBarBackgroundColor="#EE6363"
				tabBarInactiveTextColor="mintcream"
				tabBarActiveTextColor="white"
				tabBarUnderlineStyle={{backgroundColor:"#e7e7e7",height:2}}
				renderTabBar={()=><ScrollableTabBar/>}
			>
				<PopularTab tabLabel="java">java</PopularTab>
				<PopularTab tabLabel="ios">ios</PopularTab>
				<PopularTab tabLabel="Android">Android</PopularTab>
				<PopularTab tabLabel="javaScript">javaScript</PopularTab>
			</ScrollableTabView>
		</View>
		)
	}
}
class PopularTab extends Component{
	constructor(props){
		super(props);
		this.dataRepository = new DataRepository();
		this.state={
			isLoading:false,
			result:"",
			dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
		}
	}
	componentDidMount(){
		this.onLoadData();
	}
	onLoadData(){
		this.setState({
			isLoading:true
		})
		let url = URL+this.props.tabLabel+QUERY_STR;
		this.dataRepository.fetchNetRepository(url)
			.then(result=>{
				this.setState({
					dataSource:this.state.dataSource.cloneWithRows(result.items),
					isLoading:false,
				})
			})
			.catch(error=>{
				this.setState({
					result:JSON.stringify(error)
				})
			})
	}
	renderRow(data){
		return <ReponsitoryCell data={data}/>
	}
	render(){
		return (
		<View style={{flex:1}}>
			
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(data)=>this.renderRow(data)}
				refreshControl={
					<RefreshControl
						refreshing={this.state.isLoading}
					/>
				}
			/>
		</View>
		)
	}
}
