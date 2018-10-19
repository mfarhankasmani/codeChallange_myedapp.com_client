
const getUserId = (userId) => {
    return {
        type: "GET_USER_ID",
        userId: userId
    }
}
export default getUserId;