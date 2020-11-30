import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const BigTitleFontSize = height / 35;
export const TitleFontSize = height / 45;
export const ValueFontSize = height / 55;
export const ButtonFontSize = height / 60;
export const Margin = width / 20;
export const Button_Margin = height / 50;
export const MinMargin = width / 40;
export const BorderRadius = height / 200;

export default StyleSheet.create(props => ({
    TabStyle: { flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center', borderRightWidth: props && props.showrightborder ? StyleSheet.hairlineWidth : 0, borderRightColor: "#788eec", backgroundColor: props && props.IsActive ? "#788eec" : "transparent", },
    TabTextStyle: { color: props && props.IsActive ? "white" : "grey", fontSize: TitleFontSize },
    ListMainView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: Margin, borderBottomColor: "grey", borderBottomWidth: StyleSheet.hairlineWidth * 2 },
    ButtonStyle: { width: props && props.Width ? props.Width : '100%', marginBottom: props && props.MarginBottom ? props.MarginBottom : 0, justifyContent: 'center', borderRadius: props && props.borderradius ? props.borderradius : BorderRadius, backgroundColor: props && props.BackColors ? props.BackColors : "#788eec" },
    ButtonLabel: { fontSize: ButtonFontSize, letterSpacing: 0, marginVertical: props && props.ButtonPadding ? props.ButtonPadding : MinMargin, marginHorizontal: props && props.ButtonHorPadding ? props.ButtonHorPadding : Margin },
    AddonRenderItemView: { backgroundColor: "white", margin: MinMargin, marginTop: props && props.count <= 1 ? MinMargin : 0, padding: Margin, flexDirection: 'row' },
    AddonRenderItemTextView: { flex: 1, justifyContent: 'center', alignItems: 'flex-start',flexDirection:'row' },
    AddonRenderItemText: { fontSize: height / 45, color: props && props.status == true ? "#788eec" : "#788eec",marginTop:height/200 },
    AddonRenderItemButtonView1: { justifyContent: 'center', alignItems: 'flex-end', marginRight: MinMargin },
    AddonRenderItemButtonView2: { justifyContent: 'center', alignItems: 'flex-end' },


}))

