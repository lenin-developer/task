export const payloadMock = {
    TASK: {
        task: {
            title: "title",
            description: "descripcion",
            finalized: false
        }
    }
}


export const stateMock = {
    INIT: {
        list: [],
        error: null,
        loading: false
    },
    ONE_TASK: {
        list: [
            payloadMock.TASK.task
        ],
        error: null,
        loading: false
    }
}