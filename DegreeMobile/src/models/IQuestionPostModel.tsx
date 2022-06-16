export interface IQuestionPostModel{
    _id: number;
    questionText: string;
    answer1?: string;
    answer2?: string;
    answer3?: string;
    answer4?: string;
    timer: number;
    correctAnswer: string;
}
