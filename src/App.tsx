import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  itemWidth: number;
  frameSize: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    itemWidth: 130,
    frameSize: 3,
    animationDuration: 1000,
    infinite: false,
  };

  render() {
    const { images } = this.state;

    return (
      <div className="App">
        <h1 data-cy="title">Carousel with {images.length} images</h1>

        <div className="Config">
          <label htmlFor="stepId">Step:</label>
          <input
            type="number"
            name="stepId"
            id="stepId"
            value={this.state.step}
            onChange={event => this.setState({ step: +event.target.value })}
          />

          <label htmlFor="itemId">Item Width:</label>
          <input
            type="number"
            name="itemId"
            id="itemId"
            value={this.state.itemWidth}
            onChange={event =>
              this.setState({ itemWidth: +event.target.value })
            }
          />

          <label htmlFor="frameId">Frame Size:</label>
          <input
            type="number"
            name="frameId"
            id="frameId"
            value={this.state.frameSize}
            onChange={event =>
              this.setState({ frameSize: +event.target.value })
            }
          />

          <label htmlFor="animationId">Animation Duration:</label>
          <input
            type="number"
            name="animationId"
            id="animationId"
            value={this.state.animationDuration}
            onChange={event =>
              this.setState({ animationDuration: +event.target.value })
            }
          />

          <label htmlFor="infiniteId">Infinite:</label>
          <input
            type="checkbox"
            name="infiniteId"
            id="infiniteId"
            className="Checkbox"
            checked={this.state.infinite}
            onChange={event =>
              this.setState({ infinite: event.target.checked })
            }
          />
        </div>

        <Carousel
          images={this.state.images}
          step={this.state.step}
          itemWidth={this.state.itemWidth}
          frameSize={this.state.frameSize}
          animationDuration={this.state.animationDuration}
          infinite={this.state.infinite}
        />
      </div>
    );
  }
}

export default App;
