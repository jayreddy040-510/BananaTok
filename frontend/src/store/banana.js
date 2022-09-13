import csrfFetch from "./csrf";


export const RECEIVE_BANANAS = 'bananas/RECEIVE_BANANAS';
export const RECEIVE_BANANA = 'bananas/RECEIVE_BANANA';
export const CREATE_BANANA = 'bananas/CREATE_BANANA';
// export const UPDATE_BANANA = 'bananas/UPDATE_BANANA';
export const REMOVE_BANANA = 'bananas/REMOVE_BANANA'

export const getBananas = store => {
    if (!store || !store.bananas) return [];
    return Object.values(store.bananas)
}
export const getBanana = bananaId => store => {
    if (!store || !store.bananas) return null;
    return store.bananas[bananaId]
}

const receiveBananas = payload => {
    return {
        type: RECEIVE_BANANAS,
        payload
    }

}

const receiveBanana = payload => {
    return {
        type: RECEIVE_BANANA,
        payload
    }
}
// const changeBanana = payload => {
//     return {
//         type: UPDATE_BANANA,
//         payload
//     }
// }

export const deleteBanana = payload => {
    return {
        type: REMOVE_BANANA,
        payload
    }
}

const makeBanana = payload => {
    return {
        type: CREATE_BANANA,
        payload
    }
}


export const fetchBananas = () => async dispatch => {
    const res = await csrfFetch(`/api/bananas`)
    const payload = await res.json();
    dispatch(receiveBananas(payload));
}

export const fetchBanana = (bananaId) => async dispatch => {
    const res = await csrfFetch(`/api/bananas/${bananaId}`)
    const payload = await res.json();
    dispatch(receiveBanana(payload));
}

export const createBanana = (banana) => async dispatch => {
    const res = await csrfFetch(`/api/bananas`, {
        method: "POST",
        body: JSON.stringify(banana),
        headers: {
            "Content-Type": "application/json",
            "Accepted": "application/json"
        }
    })

    if (res.ok) {
    const payload = await res.json();
    dispatch(makeBanana(payload));
    }
}

// export const updateBanana = (banana) => async dispatch => {

//     // const {on} = banana.on
//     const res = await csrfFetch(`/api/bananas/${banana.id}`, {
//         method: "PATCH",
//         body: JSON.stringify(banana),
//         headers: {
//             "Content-Type": "application/json",
//             "Accepted": "application/json"
//         }
//     })
//     if (res.ok) {
//     const payload = await res.json();

//     dispatch(changeBanana(payload));
//     }
// }

export const removeBanana = (bananaId) => async dispatch => {
    const res = await csrfFetch(`/api/bananas/${bananaId}`, {
        method: "DELETE"})

        if (res.ok) {
            const payload = await res.json();
            dispatch(deleteBanana(payload));
        }
}



const bananasReducer = (state={}, action) => {
    let nextState = {...state}

    switch (action.type) {
        case RECEIVE_BANANAS:
            nextState = {...nextState, ...action.payload}
            return nextState;
        case RECEIVE_BANANA:
            nextState[action.payload.id] = action.payload;
            return nextState;

        // case UPDATE_BANANA:
        //     nextState = {...action.payload}
        //     return nextState;

        case CREATE_BANANA:
            nextState = {...action.payload}
            return nextState;

        default:
            return nextState;
    }
}

export default bananasReducer;