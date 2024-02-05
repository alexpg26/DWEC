import {Box, Flex, Text, Spacer, Tag, Button, Icon} from '@chakra-ui/react';
import { BsCalendar } from "react-icons/bs";
import { Link, Outlet } from 'react-router-dom';
function ItemLanzamientos(launch){

    return(
        <Box bg='gray.100' p='4' m='4' borderRadius="lg">
            <Flex display='flex'>
                <Text fontSize='2x1'>
                    Mision <strong>{launch.mission_name}</strong>{launch.launch_year};
                </Text>
                <Spacer />
                <Tag p='4' colorScheme={launch.launch_success?"green":"red"}>
                    {launch.launch_success?"success":"failure"}
                </Tag>
            </Flex>
            <Flex align='center'>
                <Icon as={BsCalendar} color='gray.500'/>
                <Text fontSize='em' ml='l' color='gray.500'>
                    {launch.launch_date_local.split("T")[0]}
                </Text>
            </Flex>
            <Link to={`/launch/${launch.flight_number}`}>
                <Button mt={2} colorScheme='blue'>
                    More Details
                </Button>
            </Link>
            <Outlet/>
        </Box>
    )
}


export default ItemLanzamientos;