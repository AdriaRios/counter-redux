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
          counterHistory: [...state.counterHistory, 'INCREMENT']
      }
    case 'DECREMENT':
        return {
            counter: state.counter - 1,
            counterHistory: [...state.counterHistory, 'DECREMENT']
        }
    case 'RESET':
        return {
            counter: 0,
            counterHistory: []
        }
    default:
      return state
  }
}

//STORE
const store = Redux.createStore(counter)

//ACTIONS

const increment = {type: 'INCREMENT'}
const decrement = {type: 'DECREMENT'}
const reset = {type: 'RESET'}

//VIEW

/**VIEW BINDING**/
const value = document.getElementById('value')
const history = document.getElementById('history')

const render = () => {
    value.innerHTML = store.getState().counter
    history.innerHTML = store.getState().counterHistory
}

render()
store.subscribe(render)
/**END VIEW BINDING**/

document.getElementById('increment')
  .addEventListener('click', () => store.dispatch(increment)
)

document.getElementById('decrement')
  .addEventListener('click', () => store.dispatch(decrement)
)

document.getElementById('reset')
    .addEventListener('click', () => store.dispatch(reset)
)
