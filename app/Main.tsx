import React, { Component } from 'react';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';

import Catalog from '../app/containers/Catalog'
import Cart from '../app/containers/Cart'

export default class App extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Hola Mundo</Text>
                <Catalog />
                <Cart />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }
})