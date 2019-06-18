import React, { Component } from 'react';
import { Link, Pagination } from 'carbon-components-react';
import axios from 'axios';

class Showcase extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get(`http://loylessdesigns.com/wp-json/wp/v2/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <section className="bx--grid bx--grid--full-width page-showcase full-view">
        <div className="bx--row">
          <div className="bx--col">
            <div className="masthead">
              <div className="masthead-content">
                <h2>Showcase of Work</h2>
                {this.state.posts.map(post => (
                  <h2>{post.title}</h2>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Showcase;
