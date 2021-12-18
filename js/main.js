class App extends React.Component {
  state = {
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked(text);

    return (
      <div>
        {/* Markdown */}
        <h1 className='text-center fw-bold m-4'>Markdown Previewer</h1>
        <div className='row'>
          <div className='col-6'>
            <h5 className='text-center'>Markdown goes here:</h5>
            <textarea
              className='form-control'
              id='editor'
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </div>

          {/* Result */}
          <div className='col-6' id='preview'>
            <h5 className='text-center'>Result:</h5>
            <div
              className='preview rounded'
              dangerouslySetInnerHTML={{ __html: markdown }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
