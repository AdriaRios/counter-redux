//REDUCER
const counter = (state, action) => {
  if (typeof state === 'undefined') {
    return {
        counter: 0,
        counterHistory: []
    }
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
          counter: state.counter + 1,
      }
    default:
      return state
  }
}

//STORE
const store = Redux.createStore(counter)

//ACTIONS

const increment = {type: 'INCREMENT'}

//VIEW

/**VIEW BINDING**/
const value = document.getElementById('value')

const render = () => {
    value.innerHTML = store.getState().counter
}

render()
store.subscribe(render)
/**END VIEW BINDING**/

document.getElementById('increment')
  .addEventListener('click', () => store.dispatch(increment)
)
