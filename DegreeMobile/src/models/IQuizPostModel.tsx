import { IQuestionPostModel } from './IQuestionPostModel';

export interface IQuizPostModel{
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    category: {
        categoryId: string;
        slug: string;
        title: string;
    }
    createdAt: string;
    questions?: IQuestionPostModel[];
}
