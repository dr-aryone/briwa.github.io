/* eslint-disable max-len */
import * as React from "react";
import { Link } from "react-router-dom";

interface ILibraryProps { name: string; githubName: string; desc: string; }

const Library = (props: ILibraryProps) => {
  return (
    <div className="column">
      <div className="content">
        <p>
          <strong>{props.name}</strong><br />
          <i className="fa fa-github" />&nbsp;
          <small>
            <a href={`https://github.com/${props.githubName}`} target="_blank" rel="noopener noreferrer">{props.githubName}</a>
          </small><br />
          {props.desc}
        </p>
      </div>
    </div>
  );
};

const Learnings = () => {
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
          <span className="is-block has-text-centered is-size-7">Written in <a href="https://github.com/Microsoft/TypeScript" target="_blank" rel="noopener noreferrer">Typescript</a>. Bundled with <a href="https://github.com/webpack/webpack" target="_blank" rel="noopener noreferrer">webpack</a>. Linted with <a href="https://github.com/palantir/tslint" target="_blank" rel="noopener noreferrer">TSLint</a>.</span>
        </div>
      </div>
      <div className="block-footer">
        <footer className="has-text-centered is-size-7">
          <span>ⓒ 2018 briwa.github.io. <Link to="/">back to home</Link></span>
        </footer>
      </div>
    </section>
  );
};

export default Learnings;
