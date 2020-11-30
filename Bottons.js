import React from 'react';
import { View,Button } from 'react-native';
import Styles, { MinMargin } from './Styles';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {Label, OnPress, Disabled, Width, MarginBottom, BackColors, ButtonPadding, ButtonHorPadding, borderradius } = this.props;
        return (
            <Button
                mode='contained'
                disabled={Disabled}
                color={BackColors?BackColors:"#788eec"}
                style={Styles({ Width: Width, MarginBottom: MarginBottom, BackColors: BackColors, borderradius: borderradius }).ButtonStyle}
                labelStyle={Styles({ButtonPadding:ButtonPadding, ButtonHorPadding : ButtonHorPadding}).ButtonLabel}
                onPress={OnPress}
                title={Label}
            />

        )
    }
}

export default Buttons;