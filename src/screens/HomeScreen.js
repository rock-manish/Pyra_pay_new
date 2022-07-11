// // import ImageSlider from "react-native-image-slider";
// import { Component } from "react";
// import React from 'react';

// // import { useState } from "react";
// import {
//   View,
//   Text,
//   Dimensions,
//   Image,
//   imgActive,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-gesture-handler";
// const images = [
//   "https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655579_960_720.jpg",
//   "https://cdn.pixabay.com/photo/2016/05/25/16/08/crown-1415243_960_720.png",
//   "https://cdn.pixabay.com/photo/2018/01/09/15/30/illustration-3071852_960_720.jpg",
// ];
// const WIDTH = Dimensions.get("window").width;
// const HEIGHT = Dimensions.get("window").height;

// function Pyrapay() {
//   const [imageActive, setimageActive] = useState(0);
//   onchange = (nativeEvent) => {};

//   return (
//
//

//             </View>
//           </View>

//         </View>
//
//       </ScrollView>
//     </View>
//   );
// }

// export default Pyrapay;

import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import DMTone from './DMTone';

function HomeScreen ({navigation}) {
  return (
    <View style={{backgroundColor: '#f0f8ff'}}>
      <ScrollView>
        <View
          style={{
            marginTop: 100,
            paddingLeft: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 95,
                width: 110,
                backgroundColor: '#BF40BF',
                marginRight: 13,
                borderRadius: 3,
                marginBottom: 10,
                elevation: 50,
              }}>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>
                    0
                  </Text>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      marginLeft: 40,
                      marginTop: 10,
                    }}
                    source={require('../image/wallet.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Main Wallet
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 95,
                width: 110,
                backgroundColor: '#BF40BF',
                marginRight: 13,
                borderRadius: 3,
                elevation: 50,
              }}>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>
                    0
                  </Text>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      marginLeft: 40,
                      marginTop: 10,
                    }}
                    source={require('../image/wallet.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Aeps Wallet
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: 95,
                width: 110,
                backgroundColor: '#BF40BF',
                borderRadius: 3,
                elevation: 50,
              }}>
              <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>
                    0
                  </Text>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                      marginLeft: 40,
                      marginTop: 10,
                    }}
                    source={require('../image/wallet.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    marginTop: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Matm Wallet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            Banking
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fffafa',
            borderRadius: 8,
            elevation: 20,
            height: 350,
            paddingLeft: 13,
          }}>
          <View
            style={{
              marginTop: 30,
              paddingLeft: 5,
              flexDirection: 'row',
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DMTone');
                  }}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/DMT-1.png')}
                  />
                  <Text style={{textAlign: 'center'}}>DMT-1</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/Biometric.jpg')}
                  />
                  <Text style={{textAlign: 'center'}}>Aeps</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity >
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/mobile.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Matm-1</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 30, width: 30}}
                    source={require('../image/Deposit.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Case Deposit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
              flexDirection: 'row',
              marginTop: 18,
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('DMTone');
                  }}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/DMT-1.png')}
                  />
                  <Text style={{textAlign: 'center'}}>DMT-2</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/Biometric.jpg')}
                  />
                  <Text style={{textAlign: 'center'}}>I-Aeps</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('MatmSecond');
                  }}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/mobile.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Matm-2</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 40, width: 40, marginLeft: 15}}
                    source={require('../image/adhar.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Adhaar Pay</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              paddingLeft: 5,
              flexDirection: 'row',
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/Hotel.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Hotel</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/QR.jpg')}
                  />
                  <Text style={{textAlign: 'center'}}>Scan-QR</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 40, width: 40}}
                    source={require('../image/IRCTC.png')}
                  />
                  <Text style={{textAlign: 'center'}}>IRCTC</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text
            style={{
              fontSize: 20,
              paddingBottom: 10,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            Recharge & Pay Bills
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#fffafa',
            borderRadius: 8,
            elevation: 20,
            height: 430,
            paddingLeft: 13,
          }}>
          <View
            style={{
              marginTop: 30,
              paddingLeft: 5,
              flexDirection: 'row',
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity  onPress={() => {
                    navigation.navigate('Reacharge');
                  }}>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/r.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Mobile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/dth.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Dth</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/to.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Fast Tag</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/t.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Cable</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
              flexDirection: 'row',
              marginTop: 18,
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/Bulb.webp')}
                  />
                  <Text style={{textAlign: 'center'}}>Electricity</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/landline.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Landline</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/tap.webp')}
                  />
                  <Text style={{textAlign: 'center'}}>Water</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/r.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Postpaid</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 5,
              flexDirection: 'row',
              marginTop: 18,
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/broadband.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Broadband</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/insurance.jpg')}
                  />
                  <Text style={{textAlign: 'center'}}>Insurance</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/ges.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Gass</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/municipality.png')}
                  />
                  <Text style={{textAlign: 'center'}}>municipality</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingLeft: 5,
              flexDirection: 'row',
              marginTop: 18,
            }}>
            <View style={{marginRight: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  elevation: 20,
                  borderRadius: 4,
                }}>
                <TouchableOpacity>
                  <Image
                    style={{height: 50, width: 50}}
                    source={require('../image/Loan.png')}
                  />
                  <Text style={{textAlign: 'center'}}>Loan</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
