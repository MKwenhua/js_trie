import React from 'react';

class MovieDiscount extends React.PureComponent {
  render() {
    const { setState, title } = this.props;
    return (
      <div className='special-offer'>
        <div>
          <h4>{title}</h4>
        </div>
        <img height='70' src='./dist/amc-theatres-logo.png'/>
      </div>
    )
  }
}

const SpecialOffers = {
  'Jumanji: Welcome to the Jungle': ({setState}) => (
   <MovieDiscount setState={setState} title='Jumanji: Welcome to the Jungle'/>
  ),
  'Maze Runner: The Death Cure': ({setState}) => (
   <MovieDiscount setState={setState} title='Maze Runner: The Death Cure'/>
  ),
  'Star Wars: The Last Jedi': ({setState}) => (
   <MovieDiscount setState={setState} title='Star Wars: The Last Jedi'/>
  ),
  'Blade Runner 2049':  ({setState}) => (
   <MovieDiscount setState={setState} title='Blade Runner 2049'/>
  )
}

export {
  SpecialOffers
}
