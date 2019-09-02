import React, { Component } from 'react';
import { Link, Pagination } from 'carbon-components-react';
import Axios from 'axios';
import PostTile from '../../components/PostTile';

class Showcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const { data } = await Axios.get(
      'http://loylessdesigns.com/wp-json/wp/v2/posts?_embed'
    );
    this.setState({
      posts: data,
    });
  }

  render() {
    return (
      <section className="page-showcase full-view">
        <div className="masthead">
          <div className="masthead-content">
            <h2>Showcase of Work</h2>
          </div>
        </div>
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            {this.state.posts.map(post => (
              <PostTile key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Showcase;
