import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class Is extends React.Component {
  state = {
    dt: [],
  };

  componentDidMount() {
    const {navigation}=this.props;
    const  proKey=navigation.getParam("proKey","");
    axios.get(proKey).then(res => {
      this.setState({ dt: res.data.articles});
    });
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={this.state.dt}
            contentContainerStyle={{flex:1,marginTop:10 }}
            keyExtractor={item=>item.author}

            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('haberdetay', { item: item })
                }>
                <View
                  style={{flexDirection: 'row',borderWidth: 1,borderColor: '#e813d3',borderRadius: 5,marginBottom: 10,}}> 
                  <Image style={{width:75,height:75,marginBottom:5,marginLeft:5}} source={{uri:item.urlToImage}}/>
                 <View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.author}</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fcfafb',
    padding: 8,
  },
});
