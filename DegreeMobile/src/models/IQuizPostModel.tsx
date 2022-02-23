import { IQuestionPostModel } from "./IQuestionPostModel";

export interface IQuizPostModel{
    id: number;
    title: string;
    description: string;
    imgPath: string;
    categoryId: number;
    categoryName: string;
    date: Date;
    questions?: IQuestionPostModel[];
}