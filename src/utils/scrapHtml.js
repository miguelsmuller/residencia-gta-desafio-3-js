const scrapHTML = (html, $) => {
  const returnedPosts = [];


  $(".bastian-page", html).each(function () {
    $(this)
      .find(".bastian-feed-item")
      .find(".feed-post-body")
      .each(function () {
        const post = {
          image: "",
          title: "",
          subtitle: "",
          linkArticle: [],
        };

        post.title = $(this).find(".feed-post-body-title").text();

        post.subtitle = $(this)
          .find(".feed-post-header")
          .find(".feed-post-header-chapeu")
          .text();

        post.image = $(this)
          .find(".bstn-fd-cover-picture")
          .find(".bstn-fd-picture-image")
          .attr("src");

        $(this)
          .find(".bstn-relateditems li")
          .each((id, el) => {
            post.linkArticle.push($(el).text());
          });

        returnedPosts.push(post);
      });
  });

  return returnedPosts;
};

module.exports = { scrapHTML };
