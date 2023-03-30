
const store = {
    state: {
        num: 20
    },
    actions: {
        add1(newState: { num: number }, action: { type: string }) {
            newState.num++
        },
        add2(newState: { num: number }, action: {
            type: string, val: number
        }) {
            newState.num += action.val
        },
        add3(newState: { num: number }, action: {
            type: string, val: number
        }) {
            newState.num += action.val
        }
    },
    asyncActions: {
        asyncAdd: (dispatch: Function) => {
            setTimeout(() => {
                dispatch({ type: "add1" })
            }, 1000)
        }
    }
    ,
    actionNames: {}
}

let actionNames = {}

for (let key in store.actions) {
    actionNames[key] = key;
}

store.actionNames = actionNames;


export default store