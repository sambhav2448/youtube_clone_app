import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({    

    container:{
        backgroundColor:"#fff",
        height:48,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:4,
        marginBottom:4
        
    },
    rightcontainer:{
        flexDirection:"row",
        marginRight:24,
        width:140,
        justifyContent:"space-between"
    },
    leftcontainer:{
        flexDirection:"row",
        marginLeft:24,
        justifyContent:"space-between",
        width:124
    },
    logo:{
        color:"red"
    },
    text:{
        fontSize:22,
        marginLeft:4
    },
    logoright:{
        color:"#000"
    },




    image:{
        height:200,
        width:"100%"
    }

})

export default globalStyles