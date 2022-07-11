import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';

const Screen4 = ({navigation}) => {
  const [color1, setColor1] = React.useState('black');
  const [color2, setColor2] = React.useState('#000080');
  const [color3, setColor3] = React.useState('#e05a00');
  const [recipientColor1,setRecipientColor1] = React.useState('#e05a00');
  const [recipientColor2,setRecipientColor2] = React.useState('white');
  const [recipientColor3,setRecipientColor3] = React.useState('white');

  return (
    <View style={{justifyContent:"center"}}>
    
      <View style={[styles.card,{backgroundColor:color1,width:"86%",top:0,elevation:1,marginHorizontal: '7%'}]}>
        <View style={styles.container1}>
          <Image source={require('../image/chip.png')} style={styles.img} />
          <Text style={styles.heading}>CREDIT CARD</Text>
        </View>

      <View style={styles.container2}>
        <Text style={styles.cardNumber}>1234</Text>
        <Text style={styles.cardNumber}>4569</Text>
        <Text style={styles.cardNumber}>7892</Text>
        <Text style={styles.cardNumber}>1589</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.c3Left}>
          <Text style={styles.details}>08/24</Text>
          <Text style={styles.details}>Samantha John</Text>
        </View>
        <Image style={styles.master} source={require("../image/masterCard.png")}/>
      </View>
    </View>

    
    <View style={[styles.card,{backgroundColor:color2,width:"90%",top:17,elevation:0.8,marginHorizontal:"5%"}]}>
        <View style={styles.container1}>
          <Image source={require('../image/chip.png')} style={styles.img} />
          <Text style={styles.heading}>CREDIT CARD</Text>
        </View>

      <View style={styles.container2}>
        <Text style={styles.cardNumber}>1234</Text>
        <Text style={styles.cardNumber}>4569</Text>
        <Text style={styles.cardNumber}>7892</Text>
        <Text style={styles.cardNumber}>1589</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.c3Left}>
          <Text style={styles.details}>08/24</Text>
          <Text style={styles.details}>Samantha John</Text>
        </View>
        <Image style={styles.master} source={require("../image/masterCard.png")}/>
      </View>
    </View>

    <View style={[styles.card,{backgroundColor:color3,width:"94%",top:34,elevation:0.1,marginHorizontal:"3%"}]}>
        <View style={styles.container1}>
          <Image source={require('../image/chip.png')} style={styles.img} />
          <Text style={styles.heading}>CREDIT CARD</Text>
        </View>

      <View style={styles.container2}>
        <Text style={styles.cardNumber}>1234</Text>
        <Text style={styles.cardNumber}>4569</Text>
        <Text style={styles.cardNumber}>7892</Text>
        <Text style={styles.cardNumber}>1589</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.c3Left}>
          <Text style={styles.details}>08/24</Text>
          <Text style={styles.details}>Samantha John</Text>
        </View>
        <Image style={styles.master} source={require("../image/masterCard.png")}/>
      </View>
    </View>

    <TouchableOpacity onPress={()=>{
      setRecipientColor1("#e05a00")
      setRecipientColor2("white")
      setRecipientColor3("white")
      setColor3("#e05a00")
      setColor1("black")
      setColor2("#000080")
    }} style={[styles.touchable,{backgroundColor:recipientColor1}]}>
      <Text style={styles.recipientNum}>XXXX XXXX XXXX 1234</Text>
      <Text style={[styles.details,{color:"grey"}]}>Samantha John</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      setRecipientColor2("#e05a00")
      setRecipientColor1("white")
      setRecipientColor3("white")
      setColor2("#e05a00")
      setColor3("black")
      setColor1("#000080")}} style={[styles.touchable,{backgroundColor:recipientColor2}]}>
      <Text style={styles.recipientNum}>XXXX XXXX XXXX 1234</Text>
      <Text style={[styles.details,{color:"grey"}]}>Isha John</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      setRecipientColor3("#e05a00")
      setRecipientColor2("white")
      setRecipientColor1("white")
      setColor2("black")
      setColor3("#000080")
      setColor1("#e05a00")}} 
      style={[styles.touchable,{backgroundColor:recipientColor3}]}>
      <Text style={styles.recipientNum}>XXXX XXXX XXXX 1234</Text>
      <Text style={[styles.details,{color:"grey"}]}>Arvind John</Text>
    </TouchableOpacity>

    <View style={styles.buttonGroup}>
      <TouchableOpacity style={[styles.button,{backgroundColor:"#BF40BF"}]} onPress={()=>navigation.navigate("Add New Card")}>
        <Text style={[styles.buttonText,{color:"white"}]}>Add New</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button]} onPress={() =>navigation.navigate("Sucessfull")}>
        <Text style={[styles.buttonText,{color:"#BF40BF"}]}>Pay Now</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  card: {
    height: 180,
    marginTop: '5%',
    borderRadius: 5,
    position: 'absolute'
    // backgroundColor: {color1},
  },
  container1:{
    flexDirection:"row",
    alignItems: "center",
  },
  img: {
    height: 50,
    width: 50,
  },
  heading:{
    fontSize:25,
    color:"white",
    fontWeight:"bold",
    marginLeft:3
  },
  container2:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:"2%"
  },
  cardNumber:{
    fontSize:25,
    color:"white",
    fontWeight:"bold",
  },
  container3:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"3%",
    marginTop:"10%"
  },
  details:{
    color:"white",
    fontSize:15
  },
  master:{
    height:30,
    width:50,
  },
  touchable:{
    height:70,
    // width:'100%',
    top:"100%",
    justifyContent:"center",
    marginHorizontal:"3%",
    borderWidth:1,
    borderColor:"#D3D3D3",
    borderRadius:5,
    paddingLeft:"3%",
    top:"85%",
    marginTop:"2%"
  },
  recipientNum:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    color:"grey"
  },
  buttonGroup:{
    top:"72%",
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  button:{
    height:70,
    width:175,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#D3D3D3",
  },
  buttonText:{
    fontSize:20,
    fontWeight:"bold",
    
  },

});