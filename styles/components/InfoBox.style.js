import {
    StyleSheet, Dimensions
} from 'react-native'
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: width / 40,
        marginBottom: 1,
        backgroundColor: 'white',
        maxHeight: height / 10,
    }
});

export default styles;