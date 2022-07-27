const initState = {};

export default function socketReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case 'setSocket':
      return { ...data };
    default:
      return preState;
  }
}