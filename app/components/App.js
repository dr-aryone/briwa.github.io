/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { differenceInYears } from 'date-fns';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age: differenceInYears(
        new Date(),
        new Date(1990, 11, 19),
      ),
    };
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered has-text-centered">
              <div className="column is-7">
                <div className="block-wrapper">
                  <div className="block-header">
                    <div className="block-titles">
                      <h1 className="title">Hello!</h1>
                      <h2 className="subtitle">I&apos;m Briwa. { this.state.age } y/o web developer.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-footer">
          <div className="social-media-cont has-text-centered">
            <a className="nav-item" href="https://twitter.com/ssbriwa">
              <span className="icon">
                <i className="fa fa-lg fa-twitter" />
              </span>
            </a>
            <a className="nav-item" href="https://github.com/briwa">
              <span className="icon">
                <i className="fa fa-lg fa-github" />
              </span>
            </a>
            <a className="nav-item" href="https://instagram.com/ssbriwa">
              <span className="icon">
                <i className="fa fa-lg fa-instagram" />
              </span>
            </a>
          </div>
          <footer className="has-text-centered is-size-7">
            <span>ⓒ 2018 briwa.github.io. <Link to="/learnings">what I learned</Link></span>
          </footer>
        </div>
      </section>
    );
  }
}

export default App;
