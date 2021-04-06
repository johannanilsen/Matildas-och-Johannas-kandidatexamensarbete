class MyComponent extends React.Component {
  state = {
    redirect: false
  }

  handleSubmit () {
    axios.post(/**/)
      .then(() => this.setState({ redirect: true }));
  }

  render () {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/somewhere'/>;
     }

     return <RenderYourForm/>;
}
