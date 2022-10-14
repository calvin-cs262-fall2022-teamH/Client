import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    buttons: {
        flex: 1,
        padding: 20,
    },
    texts: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#333',
    },
    pages: {
        margin: 0,
        padding: 0,
        backgroundColor: 'FFF',
        borderRadius: 10,
        flexDirection: 'row',
        align: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    }
});