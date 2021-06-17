import * as React from 'react'
import { Text } from 'react-native'
import GenerateCampaign from './GenerateCampaign'

function Login({navigation}){
    return(
        <Text style={{fontSize: 24}} onPress={() => navigation.navigate("GenerateCampaign")}>This is Login</Text>
    )
}

export default Login