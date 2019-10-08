import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, Platform,imageStyle } from 'react-native';
import Constants from 'expo-constants';




export default class Home extends React.Component {

static navigationOptions={
header:null,
}
  

    fncOpenHaberler=() =>{
     this.props.navigation.navigate('detail');
    }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('./assets/haber.jpg') } />
        <TouchableOpacity onPress={ this.fncOpenHaberler }> 

          {Platform.OS === ('android' || Platform.OS === 'ios') &&
           <Text style={styles.btn}>Haberler</Text>
          }

        </TouchableOpacity>

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


btn: {
  width:'100%',
  padding: 10,
  fontSize: 30,
  textAlign:'center',
  borderWidth:1,
  borderColor: '#fa0202',
  backgroundColor: '#5c77ff',
  borderRadius:10,
  marginTop:Platform.OS==='ios' ? 10:20,

},
 
});