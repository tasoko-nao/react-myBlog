type UserType = {
    id: number;
    password: string;
    isAdmin: boolean;
}

export const User: Array<UserType> = [
    {
        id: 1,
        password: "1",
        isAdmin: false,
    },
    {
        id: 10,
        password: "10",
        isAdmin: true
    }
]