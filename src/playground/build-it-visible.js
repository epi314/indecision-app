const appRoot = document.getElementById('app')

let isToggled = false

const onToggle = () => {
  isToggled = !isToggled

  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>
        {isToggled ? 'Hide details' : 'Show details'}
      </button>
      {isToggled ? <p>Hey. These are some details you can now see!</p> : undefined}
    </div>
  )

  ReactDOM.render(template, appRoot)
}

render()
