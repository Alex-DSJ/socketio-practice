const initState = {};

export default function userReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case 'setUser':
      return data;
    default:
      return preState;
  }
}