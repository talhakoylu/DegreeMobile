import React, { useState } from 'react'
import { Divider, FlatList, Heading, HStack, Text, View, VStack, } from 'native-base';
import StandardLayout from '@views/layouts/StandardLayout';
import CustomContainer from '@components/CustomContainer';

interface Data{
    id: number;
    quizName: string;
    date: string;
}

const data: Data[] = [

    {id:1, quizName:'xx1', date:'xx.xx.xx'},
    {id:2, quizName:'xx2', date:'xx.xx.xx'},
    {id:3, quizName:'xx3', date:'xx.xx.xx'},
    {id:4, quizName:'xx4', date:'xx.xx.xx'},


]

const LastSolvedQuizesScreen: React.FC = () => {

    const item = ({item} : any)=>{
        return (
            <VStack flexDirection={'row'} justifyContent={'center'}>
                <HStack width={100} backgroundColor={'gray.300'} borderBottomWidth={1} borderColor={'gray.200'}
                 paddingX={4} paddingY={2}>
                    <Text bold>{item.id}</Text>
                </HStack>
                <HStack width={100} backgroundColor={'blueGray.400'} borderBottomWidth={1} borderColor={'gray.200'} justifyContent={'center'}
                 paddingX={4} paddingY={2}>
                    <Text bold>{item.quizName}</Text>
                </HStack>
                <HStack width={100} backgroundColor={'gray.300'} borderBottomWidth={1} borderColor={'gray.200'} justifyContent={'flex-end'}
                 paddingX={4} paddingY={2}>
                    <Text bold>{item.date}</Text>
                </HStack>
            </VStack>
        )
    }

    return (
        <StandardLayout>
            <CustomContainer>
                <VStack flex={1} space={4} width={'100%'}>
                    <HStack justifyContent={"center"}>
                        <Heading size="xl" color={'blueGray.800'}> Last Solved Quizes </Heading>
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                    <HStack justifyContent={"center"} alignItems={'center'}>
                        <FlatList
                        data={data}
                        renderItem={item}
                        keyExtractor={(item,index)=>index.toString()}
                        />
                    </HStack>
                    <Divider my={2} bg="gray.900" />
                </VStack>
            </CustomContainer>
        </StandardLayout>
    )
}

export default LastSolvedQuizesScreen;