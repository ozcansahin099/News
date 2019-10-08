import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from "axios";


export default class Detail extends React.Component {

static navigationOptions={
header:null,
}
  

    fncOpenHaberlereGitIs=() =>{
        
    const url="https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=48cc1876aa9f4b228a311427f9956e49"
       const data ={
        country:"tr",
        category:"business",
        apiKey:"48cc1876aa9f4b228a311427f9956e49"
      }
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       // const description=dt.articles[2].description
        //console.log(description);
       this.props.navigation.navigate('is',{proKey:url,});
       
    
      })
    }

     fncOpenHaberlereGitEglence=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"entertainment",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       this.props.navigation.navigate('is',{proKey:url,});
      
      })
    }
     fncOpenHaberlereGitSaglık=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"health",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       // console.log("response data:"+JSON.stringify(dt))
       this.props.navigation.navigate('is',{proKey:url,});
      })
    }

     fncOpenHaberlereGitBilim=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"science",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       // console.log("response data:"+JSON.stringify(dt))
      this.props.navigation.navigate('is',{proKey:url,});
      })
    }
     fncOpenHaberlereGitSpor=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"sports",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       // console.log("response data:"+JSON.stringify(dt))
      this.props.navigation.navigate('is',{proKey:url,});
      })
    }
     fncOpenHaberlereGitTeknoloji=() =>{
      const url="https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=48cc1876aa9f4b228a311427f9956e49"
     const data={
         country:"tr",
         category:"technology",
         apiKey:"48cc1876aa9f4b228a311427f9956e49"

     } 
      axios.get(url,{params:data})
      .then(res=>{
        const dt=res.data
       // console.log("response data:"+JSON.stringify(dt))
       this.props.navigation.navigate('is',{proKey:url,});
      })
    }

  render() {
    return (
      <View style={styles.container}>
       <ScrollView keyboardShouldPersistTaps={'always'}>
       
       <TouchableOpacity onPress={this.fncOpenHaberlereGitIs}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>İŞ
          </Text>
          </TouchableOpacity>

         <TouchableOpacity onPress={this.fncOpenHaberlereGitEglence}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>EĞLENCE 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenHaberlereGitSaglık}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>SAĞLIK 
          </Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={this.fncOpenHaberlereGitBilim}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>BİLİM 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenHaberlereGitSpor}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>SPOR 
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.fncOpenHaberlereGitTeknoloji}> 
          <Text style ={[styles.txt,{width:'100%',padding: 20,fontSize: 20,textAlign:'center',borderWidth:1,borderColor: '#4287f5',
          backgroundColor: '#4287f5',
          borderRadius:10,},]}>TEKNOLOJİ 
          </Text>
          </TouchableOpacity>
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
 txt:{
  width:'70%',
  padding: 5,
  fontSize: 10,
  textAlign:'center',
  borderWidth:1,
  backgroundColor: '#5c77ff',
  borderRadius:10,
  marginBottom:5,
  
  },

 
});