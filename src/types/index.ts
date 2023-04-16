type Question = {
    question_string: string;
    right_choice: number;
    answers: string[];
};
type Quiz = {
    id:string;
    creator: string;
    topic: string;
    questions: Question[];
};

export type { Question, Quiz };