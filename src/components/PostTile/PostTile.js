import React, { Component } from 'react';
import { ModalWrapper, Tag } from 'carbon-components-react';

class PostTile extends Component {
  constructor(props) {
    super(props);
    this.createMarkup = this.createMarkup.bind();
    this.decodeHtml = this.decodeHtml.bind();
  }

  createMarkup(html) {
    return { __html: html };
  }

  decodeHtml(html) {
    let txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }

  render() {
    const { post } = this.props;
    console.log(post);
    if (post) {
      let postTitle = this.decodeHtml(post.title.rendered);
      let featuredImage =
        post.featured_media !== 0 ? post._embedded['wp:featuredmedia'][0] : '';
      let catArray = post._embedded['wp:term'][0];
      let tagArray = post._embedded['wp:term'][1];
      return (
        <div className="post-tile-wrapper bx--col">
          <div className="post-thumb">
            <img
              src={
                post.acf.showcase_thumbnail &&
                post.acf.showcase_thumbnail.sizes['post-thumbnail']
              }
              alt=""
            />
          </div>
          <ModalWrapper
            id="transactional-passive-modal"
            className="post-tile"
            passiveModal
            buttonTriggerText={postTitle}
            modalLabel="Showcase"
            modalHeading={postTitle}
            shouldCloseAfterSubmit>
            <div className="post-category">
              <ul>
                {catArray.map(category => (
                  <Tag
                    type={category.slug === 'development' ? 'red' : 'blue'}
                    disabled={false}
                    role="listitem"
                    key={category.id}>
                    {category.name}
                  </Tag>
                ))}
              </ul>
            </div>
            <div
              className="post-content"
              dangerouslySetInnerHTML={this.createMarkup(
                post.content.rendered
              )}></div>
            {featuredImage && (
              <div className="post-image">
                <img
                  src={
                    featuredImage.media_details.sizes['post-thumbnail']
                      .source_url
                  }
                  alt={featuredImage.alt_text}
                />
              </div>
            )}
          </ModalWrapper>
        </div>
      );
    }
  }
}

export default PostTile;
