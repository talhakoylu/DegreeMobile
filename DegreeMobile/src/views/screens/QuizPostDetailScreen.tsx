import CustomContainer from '@components/CustomContainer'
import QuizPostItem from '@components/quiz_post/QuizPostItem'
import { IQuizPostModel } from '@models/IQuizPostModel'
import StandardLayout from '@views/layouts/StandardLayout'
import { Box, Button, Heading, HStack, Image, Modal, Text, VStack } from 'native-base'
import React, { useState } from 'react'

const data: IQuizPostModel = {
    id: 1,
    title: "Engineering Concepts & the Pikachu Universe Data From IQuizPostModel Example",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    categoryId: 2,
    categoryName: "General",
    date: new Date("2022-02-21"),
    imgPath: "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg",
    questions: [
        {
            id: 1,
            question: "Question 1 Text",
            answer1: "answer 1",
            answer2: "answer 2"
        },
        {
            id: 2,
            question: "Question 2 Text",
            answer1: "answer 1",
            answer2: "answer 2",
            answer3: "answer 3",
            answer4: "answer 4"
        },
        {
            id: 3,
            question: "Question 3 Text",
            answer1: "answer 1",
            answer2: "answer 2",
            answer3: "answer 3",
  
        }
    ]
}

const QuizPostDetailScreen: React.FC = ({ route, navigation }: any) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <StandardLayout>
            {console.log(route.params?.quizId)}
            <QuizPostItem data={data} navigation={navigation} />
        </StandardLayout>
    )
}

export default QuizPostDetailScreen;