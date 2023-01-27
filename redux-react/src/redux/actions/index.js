// ./src/redux/actions/index.js
export const actionCreatorCounter = (increment = 1) => ({ 
    type: 'INCREMENT_COUNTER',
    payload: increment,
  });

export const actionTheme = {
  type:'CHANGE_THEME'
}

export const clickCounter = () =>({
  type:'INCREMENT_CLICK'
})