import { ILastSolvedQuizCardModel } from 'models/ILastSolvedQuizCardModel';
import { HStack, Icon, Image, Text, VStack } from 'native-base'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SolvedQuizItemProps {
    item: ILastSolvedQuizCardModel;
    [key: string]: any;
}

const SolvedQuizListItem: React.FC<SolvedQuizItemProps> = ({item, ...props}) => {
    return (
        <HStack space={4} {...props}>
            <Image source={{ uri: item.imgUri }} size={"md"} rounded={"md"} alt={item.title} />
            <VStack flex={1} marginTop={-0.5} justifyContent={"space-between"}>
                <Text bold noOfLines={1} fontSize={"md"}>{item.title}</Text>
                <Text color={"gray.500"} noOfLines={1} fontSize={"sm"}>Category: <Text bold color={"dark.50"}>{item.categoryName}</Text></Text>
                <HStack space={2} alignItems={"center"} size={"sm"}>
                    <Icon as={AntDesign} name={"clockcircleo"} size={"xs"} color={"gray.400"} />
                    <Text color={"gray.400"} noOfLines={1} fontSize={"xs"}>{item.date.toDateString()}</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default SolvedQuizListItem;