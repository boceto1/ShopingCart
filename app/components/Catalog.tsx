import React, { FunctionComponent, Component, FormEvent } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ClippingRectangle } from 'react-native';


export interface StoreProps {

}

export interface DispatchProps {
    
}

export interface State {
 
}

type Props = StoreProps & DispatchProps

export default class AddTodoForm extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = { }
    }

    render() {
        return (

            <View style={styles.headerContainer}>
                <Text >Catalog Part</Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 30,
        justifyContent: 'center'
    },
    formPropierties: {
        marginTop: 10,
        flexDirection: 'row'
    }
});


