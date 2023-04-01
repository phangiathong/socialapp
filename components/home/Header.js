import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image 
        style={styles.logo } 
        source={require('../../assets/header-logo.png')}/>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image 
                source={
                    require('../../assets/add.png')
                }
                style={styles.icon}
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={
                  require('../../assets/tym-icon.png')
                }
                style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image
                    source={
                        require('../../assets/message-icon.png')
                    }
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    iconsContainer: {
        flexDirection: 'row'
    },
    logo: {
        height: 30,
        width: 150,
        resizeMode: 'contain'
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 20,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
})

export default Header