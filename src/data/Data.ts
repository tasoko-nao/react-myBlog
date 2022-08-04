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
        imgPath: "https://source.unsplash.com/1DoCgbgtoLs",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1]
    },
    {
        id: 2,
        title: "タイトル2",
        imgPath: "https://source.unsplash.com/HeQswh6F3Uw",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 2]
    },
    {
        id: 3,
        title: "タイトル3",
        imgPath: "https://source.unsplash.com/RFCFhhl3xfQ",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 2, 3, 4]
    },
    {
        id: 4,
        title: "タイトル4",
        imgPath: "https://source.unsplash.com/BDpIYAKh9VM",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 2, 4]
    },
    {
        id: 5,
        title: "タイトル5",
        imgPath: "https://source.unsplash.com/zY3mjsIvg0U",
        content: "内容の一部が入ります",
        created: "2022/08/01",
        category: [1, 3]
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