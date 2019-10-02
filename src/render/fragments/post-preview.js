
const { html } = require('../../utils/misc')

module.exports = (post) => 
    html`
        <a class="post-preview" href="/blog/${post.slug}" aria-label="${post.meta.title}">
            ${post.meta.title}

            <div class="flex-spacer"></div>

            <time datetime="${post.meta.date}" itemProp="datePublished">
                ${post.meta.date}
            </time>
        </a>
    `