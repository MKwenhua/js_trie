import React from 'react';

class MovieDiscount extends React.PureComponent {
  state = {
    modalOpen: false
  }
  toggleModal = setting => () => this.setState({modalOpen: setting})
  render() {
    const {setState, poster, title} = this.props;
    const {modalOpen} = this.state;
    return (
      <div>
        <div onClick={this.toggleModal(true)} className='special-offer'>
          <div className='ad-info'>
            <img src={poster} height='86'/>
            <div>
              <h4>{title}</h4>
              <p><span className='deal-tag'>40%</span> Off With Coupon</p>
            </div>
          </div>
          <img height='70' src='./dist/amc-theatres-logo.png'/>
        </div>
        <div className={modalOpen ? 'overlay' : 'hidden'}>
          <div className='get-deal-modal'>
            <h3>{`Go See ${title}!`}</h3>
            <h4>Fill In Info</h4>
            <a onClick={this.toggleModal(false)} className='close-thik'></a>
            <formbox>
              <div className='form-group'>
                <div class='form-group'>
                  <label htmlFor='name'>Password:</label>
                  <input type='text' className='form-control' placeholder='Enter Name' name='name'/>
                </div>
                <label htmlFor='email'>Email:</label>
                <input type='email' className='form-control' placeholder='Enter email' name='email'/>
              </div>

              <div className='checkbox'>
                <label><input type='checkbox' name='remember'/>
                  Remember me</label>
              </div>
              <button type='submit' onClick={this.toggleModal(false)} className='btn btn-info'>Submit</button>
            </formbox>
          </div>
        </div>
      </div>
    )
  }
}

const SpecialOffers = {
  'Jumanji: Welcome to the Jungle': ({setState}) => (
    <MovieDiscount setState={setState} poster='./dist/Jumanji.jpg' title='Jumanji: Welcome to the Jungle'/>
  ),
  'Maze Runner: The Death Cure': ({setState}) => (
    <MovieDiscount setState={setState} poster='./dist/mazerunner.jpg'  title='Maze Runner: The Death Cure'/>
  ),
  'Star Wars: The Last Jedi': ({setState}) => (
    <MovieDiscount setState={setState} poster='./dist/jar-jar.jpg' title='Star Wars: The Last Jedi'/>
  ),
  'Blade Runner 2049': ({setState}) => (
    <MovieDiscount setState={setState} poster='./dist/blade-runner.jpg' title='Blade Runner 2049'/>
  )
}

export {SpecialOffers}
