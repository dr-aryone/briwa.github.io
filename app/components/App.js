/* eslint-disable max-len */
import React from 'react';
import { differenceInYears } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      birthday: differenceInYears(
        new Date(),
        new Date(1990, 11, 19),
      ),
    };
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Hello!
            </h1>
            <h2 className="subtitle">
              I&apos;m Briwa. { this.state.birthday } y/o web developer.
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
