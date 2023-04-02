// export const incNumber = () => {
//     return {
//         type: 'INCREMENT',
//         payload: 2
//     }
// };

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        add5: num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};