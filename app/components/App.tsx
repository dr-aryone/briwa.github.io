/* eslint-disable max-len */
import { differenceInYears } from "date-fns";
import * as React from "react";
import { Link } from "react-router-dom";

class App extends React.Component {
  private age: number;

  constructor(props: any) {
    super(props);

    this.age = differenceInYears(
      new Date(),
      new Date(1990, 11, 19),
    );
  }

  public render() {
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
                      <h2 className="subtitle">I&apos;m <a className="nav-item" href="https://github.com/briwa">Briwa</a>. {this.age} y/o frontend developer.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block-footer">
          <footer className="has-text-centered is-size-7">
            <span>ⓒ 2018 briwa.github.io. <Link to="/learnings">what I learned</Link></span>
          </footer>
        </div>
      </section>
    );
  }
}

export default App;
