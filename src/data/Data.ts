export type PostType = {
    id: number;
    title: string;
    imgPath: string;
    content: string;
    created: string;
    category: Array<number>;
}
export const Posts: Array<PostType> = [
    {
        id: 1,
        title: "タイトル1",
        imgPath: "https://source.unsplash.com/random",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 2]
    },
    {
        id: 2,
        title: "タイトル2",
        imgPath: "https://source.unsplash.com/random",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1]
    },
    {
        id: 3,
        title: "タイトル3",
        imgPath: "https://source.unsplash.com/random",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 2, 4]
    },
];

export type CategoryType = {
    id: number;
    name: string;
}
export const Categories: Array<CategoryType> = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "JavaScript",
    },
    {
        id: 4,
        name: "Python",
    },
    {
        id: 5,
        name: "Vue",
    }
]