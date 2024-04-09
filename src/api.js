export const getComments = async() => {
    return[
        {
            id: "1",
            body: "First comment",
            username: "Shubham",
            userId: "1",
            parentId: null,
            createdAt: "2024-04-09T23:00:33.010+12:44"
        },
    ]
}

export const createComment = async(text, parentId = null) => {
    return{
        id: Math.random().toString(36).substring(2,9),
        body: text,
        parentId,
        userId: "1",
        username: "john",
        createdAt: new Date().toISOString(),
    }
}

export const updateComment = async(text) => {
    return {text};
}

export const deleteComment = async() => {
    return {};
}