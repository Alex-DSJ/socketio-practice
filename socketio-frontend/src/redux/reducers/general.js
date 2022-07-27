const initState = { services: [] };

export default function generalReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case 'setGeneral':
      return { ...preState, ...data };
    default:
      return preState;
  }
}