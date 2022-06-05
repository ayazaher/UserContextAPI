import {HStack,Input} from 'native-base';
import React,{useState,useContext} from 'react';
import { Search,getAllUsers } from '../Actions';
import {usersContext} from '../Context';
import Icon from 'react-native-vector-icons/AntDesign';
export default SearchBar=()=>{
    const [title,setTitle] = useState('');
    const {state,dispatch} = useContext(usersContext);  
     

    const resolve = async (val)=>{
        dispatch(await getAllUsers());
        dispatch(Search(state.users.list.filter((user) => (user.name.includes(val)))));
        
       
    }
    const resolve2 = async ()=>{
        dispatch(await getAllUsers());
        
       
    }
    const handleValidUser=(val)=>{
        setTitle(val);
        if(val.trim().length>=3)
           resolve(val);
        else
           resolve2();
        
      }
    return (
        <HStack w="100%" alignSelf="center" mt="3" >
           
          <Input placeholder="Search" onChangeText={handleValidUser} value={title} variant="filled" width="100%" placeholderTextColor='black' fontSize="15" pl="5" borderRadius="50" backgroundColor="darkgray" InputLeftElement={<Icon size={30} color="gray.400" name='search1'/>} />
        </HStack>)

  }