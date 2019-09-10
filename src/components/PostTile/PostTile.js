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
      let postImages = {
        featured:
          post.featured_media !== 0
            ? post._embedded['wp:featuredmedia'][0].media_details.sizes.full
                .source_url
            : '',
        thumb:
          post.acf.showcase_thumbnail !== 0
            ? post.acf.showcase_thumbnail.sizes['post-thumbnail']
            : '',
      };
      let catArray = post._embedded['wp:term'][0];
      let tagArray = post._embedded['wp:term'][1];
      return (
        <div className="post-tile bx--col-lg-4 bx--col-md-3 bx--col-sm-2">
          <div className="post-thumb">
            <img src={postImages.thumb} alt="" />
          </div>
          <div className="post-button">
            <ModalWrapper
              id="transactional-passive-modal"
              className="post-modal"
              passiveModal
              buttonTriggerText={postTitle}
              modalLabel="Showcase"
              modalHeading={postTitle}
              shouldCloseAfterSubmit>
              <div
                className="post-content"
                dangerouslySetInnerHTML={this.createMarkup(
                  post.content.rendered
                )}></div>
              <div className="post-tags">
                <ul>
                  {tagArray.map(category => (
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
              {postImages.featured !== '' && (
                <div className="post-image">
                  <img
                    src={postImages.featured}
                    alt={`Examples of ${postTitle}`}
                  />
                </div>
              )}
            </ModalWrapper>
          </div>
        </div>
      );
    }
  }
}

export default PostTile;
