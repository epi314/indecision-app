class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handleDecision = this.handleDecision.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length === this.state.options.length) {
      return
    }
    console.log('componentDidUpdate')
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // })
    if (this.state.options.length > 0) {
      this.setState(() => ({ options: [] }))
    }
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handleDecision() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter non-empty value to add item!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!'
    }

    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat([option])
    //   }
    // })
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer.'
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleAction={this.handleDecision}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}/>
        <AddOption
          handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handleAction}
//           disabled={!this.props.hasOptions}>
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handleAction}
        disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.text}</li>
//       </div>
//     )
//   }
// }
const Option = (props) => {
  return (
    <div>
      <li>
        {props.text}
        <button
          onClick={() => {
            props.handleDeleteOption(props.text)
          }
        }>
            Remove
        </button>
      </li>
    </div>
  )
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <ul>
//           {
//             this.props.options.map((option) => {
//               return <Option
//                 key={option}
//                 text={option}
//               />
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      <ul>
        {
          props.options.map((option) => <Option
              key={option}
              text={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        }
      </ul>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    // this.setState(() => {
    //   return {
    //     error
    //   }
    // })
    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
