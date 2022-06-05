import {Box,Text,Button,Heading,FlatList,HStack,ArrowForwardIcon,Select} from 'native-base';
import { useContext,useEffect } from 'react';
import {usersContext} from '../Context'
import { getAllUsers } from '../Actions';
import { TouchableOpacity } from 'react-native';
import Searchbar from "./Searchbar";
export const Home = ({navigation})=>{
    const {state,dispatch} = useContext(usersContext);
    

    

    const resolve = async ()=>{
        dispatch(await getAllUsers());
    }
    useEffect(()=>{
        resolve()
    },[])

    return <Box>
        <Searchbar/>
        <Heading style={{textAlign:'center',color:'red'}}>
                Users
        </Heading>
        
        <FlatList
        data={state.users.list||[]}
        renderItem={({item})=>{
        
                return(
                <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                   <HStack style={{justifyContent:'space-between'}}> 
                      <TouchableOpacity onPress={()=>{navigation.navigate('Profile',{id:item.id})}}>
                             <Text>
                                  {item.name}
                            </Text>
                      </TouchableOpacity> 
                           
                      </HStack>
                  
                </Box>
            )
        }}
        keyExtractor={(item)=>item.id}
/>
        
    </Box>

}
