/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
		
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View} from 'react-native';
import {Navigator} from "react-native-deprecated-custom-components";
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage'

type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			selectedTab: 'tb_popular',
		}
	}
  render() {
    return (
      <View style={styles.container}>
        
      	<TabNavigator>
		  <TabNavigator.Item
		    selected={this.state.selectedTab === 'tb_popular'}
		    selectedTitleStyle={{color:'red'}}
		    title="最热"
		    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
		    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_polular.png')} />}
		    badgeText="1"
		    onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
		    <PopularPage/>
		  </TabNavigator.Item>
		  
		  <TabNavigator.Item
		    selected={this.state.selectedTab === 'tb_trending'}
		    selectedTitleStyle={{color:'green'}}
		    title="趋势"
		    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
		    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]} source={require('../../res/images/ic_trending.png')} />}
		    onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
		    <View style={styles.page2}></View>
		  </TabNavigator.Item>
		  
		  <TabNavigator.Item
		    selected={this.state.selectedTab === 'tb_favorite'}
		    selectedTitleStyle={{color:'red'}}
		    title="收藏"
		    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
		    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_polular.png')} />}
		    badgeText="1"
		    onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
		    <View style={styles.page1}></View>
		  </TabNavigator.Item>
		  
		  <TabNavigator.Item
		    selected={this.state.selectedTab === 'tb_my'}
		    selectedTitleStyle={{color:'green'}}
		    title="我"
		    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
		    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'green'}]} source={require('../../res/images/ic_trending.png')} />}
		    onPress={() => this.setState({ selectedTab: 'tb_my' })}>
		    <View style={styles.page2}></View>
		  </TabNavigator.Item>
		</TabNavigator>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
   page1: {
    flex: 1,
    backgroundColor: 'salmon',
  },
   page2: {
    flex: 1,
    backgroundColor: 'green',
  },
  image: {
  	width:22,
  	height:22,
  }
});
