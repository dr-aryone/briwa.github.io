/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Library = ({ name, githubName, desc }) => {
  return (
    <div className="column">
      <div className="content">
        <p>
          <strong>{ name }</strong><br />
          <i className="fa fa-github" />&nbsp;
          <small>
            <a href={`https://github.com/${githubName}`} target="_blank" rel="noopener noreferrer">{githubName}</a>
          </small><br />
          {desc}
        </p>
      </div>
    </div>
  );
};

const Credits = () => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered has-text-centered">
            <div className="column is-7">
              <div className="block-wrapper">
                <div className="block-header">
                  <div className="block-titles">
                    <h2 className="is-size-3">what I learned</h2>
                    <h2 className="is-size-6">throughout this project:</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-centered has-text-centered">
            <Library name="React" githubName="facebook/react" desc="View rendering." />
            <Library name="React Router Dom" githubName="ReactTraining/react-router" desc="Routing in React." />
            <Library name="Bulma" githubName="jgthms/bulma" desc="CSS framework." />
            <Library name="Font Awesome" githubName="FortAwesome/Font-Awesome" desc="Font icons." />
            <Library name="date-fns" githubName="date-fns/date-fns" desc="Date utilities." />
          </div>
          <span className="is-block has-text-centered is-size-7">Bundled with <a href="https://github.com/webpack/webpack" target="_blank" rel="noopener noreferrer">webpack</a> + <a href="https://github.com/babel/babel" target="_blank" rel="noopener noreferrer">babel</a>. Linted with <a href="https://github.com/eslint/eslint" target="_blank" rel="noopener noreferrer">ESLint</a>.</span>
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
          <span>ⓒ 2018 briwa.github.io. <Link to="/">back to home</Link></span>
        </footer>
      </div>
    </section>
  );
};

export default Credits;
