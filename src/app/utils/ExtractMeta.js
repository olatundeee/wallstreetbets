import {
    getPostSummary,
    extractBodySummary,
    extractImageLink,
} from 'app/utils/ExtractContent';
import { makeCanonicalLink } from 'app/utils/CanonicalLinker.js';
import { proxifyImageUrl } from 'app/utils/ProxifyUrl';

const proxify = (url, size) => proxifyImageUrl(url, size).replace(/ /g, '%20');

const site_desc =
    'Like 4chan found a bloomberg terminal. The Official Mods Twitter is @wsbmod. A budding community of over 7.4 million degenerates.';

const platform_name = 'WallStreetBets';
const domain = 'wsb.3speak.co/';
const seo_image = `//${domain}/images/wsblogo.png`;
    

function addSiteMeta(metas) {
    metas.push({ title: 'WallStreetBets' });
    metas.push({ name: 'description', content: site_desc });
    metas.push({ property: 'og:type', content: 'website' });
    metas.push({ property: 'og:site_name', content: 'WallStreetBets' });
    metas.push({ property: 'og:title', content: 'WallStreetBets' });
    metas.push({ property: 'og:description', content: site_desc });
    metas.push({
        property: 'og:image',
        content: seo_image,
    });
    metas.push({ property: 'fb:app_id', content: $STM_Config.fb_app });
    metas.push({ name: 'twitter:card', content: 'summary' });
    metas.push({ name: 'twitter:site', content: '@wsbmod' });
    metas.push({ name: 'twitter:title', content: '#WSB' });
    metas.push({ name: 'twitter:description', site_desc });
    metas.push({
        name: 'twitter:image',
        content: 'https://hive.blog/images/hive-blog-twshare.png',
    });
}

function addPostMeta(metas, content, profile) {
    const { profile_image } = profile;
    const { category, created, body, json_metadata } = content;
    const isReply = content.depth > 0;

    const title = content.title + ' — WallStreetBets';
    const desc =
        getPostSummary(json_metadata, body, isReply) + ' by ' + content.author;
    const image_link = extractImageLink(json_metadata, body);

    const canonicalUrl = makeCanonicalLink(content, json_metadata);
    const localUrl = makeCanonicalLink(content, null);
    const image = image_link || profile_image;

    // Standard meta
    metas.push({ title });
    metas.push({ canonical: canonicalUrl });
    metas.push({ name: 'description', content: desc });

    // Open Graph data
    metas.push({ name: 'og:title', content: title });
    metas.push({ name: 'og:type', content: 'article' });
    metas.push({ name: 'og:url', content: localUrl });
    metas.push({
        name: 'og:image',
        content: proxify(image, '1200x630') || seo_image,
    });
    metas.push({ name: 'og:description', content: desc });
    metas.push({ name: 'og:site_name', content: 'WallStreetBets' });
    metas.push({ name: 'fb:app_id', content: $STM_Config.fb_app });
    metas.push({ name: 'article:tag', content: category });
    metas.push({
        name: 'article:published_time',
        content: created,
    });

    // Twitter card data
    metas.push({
        name: 'twitter:card',
        content: image ? 'summary_large_image' : 'summary',
    });
    metas.push({ name: 'twitter:site', content: '@wsbmod' });
    metas.push({ name: 'twitter:title', content: title });
    metas.push({ name: 'twitter:description', content: desc });
    metas.push({
        name: 'twitter:image',
        content: proxify(image, '1200x630') || seo_image,
    });
}

function addAccountMeta(metas, accountname, profile) {
    let { name, about, profile_image } = profile;

    name = name || accountname;
    about =
        about ||
        'Like 4chan found a bloomberg terminal. The Official Mods Twitter is @wsbmod. A budding community of over 7.4 million degenerates';
        profile_image = profile_image || seo_image;


    // Set profile tags
    const title = `@${accountname}`;
    const desc = `The latest posts from ${name}. Follow me at @${
        accountname
    }. ${about}`;

    // Standard meta
    metas.push({ name: 'description', content: desc });

    // Twitter card data
    metas.push({ name: 'twitter:card', content: 'summary' });
    metas.push({ name: 'twitter:site', content: '@wsbmod' });
    metas.push({ name: 'twitter:title', content: title });
    metas.push({ name: 'twitter:description', content: desc });
    metas.push({ name: 'twitter:image', content: profile_image });
}

function readProfile(chain_data, account) {
    if (!chain_data.profiles[account]) return {};
    return chain_data.profiles[account]['metadata']['profile'];
}

export default function extractMeta(chain_data, rp) {
    let username;
    let content;
    if (rp.username && rp.slug) {
        // post
        const obj = chain_data.content[`${rp.username}/${rp.slug}`];
        content = obj && obj.id !== '0.0.0' ? obj : null;
        username = content ? content.author : null;
    } else if (rp.accountname) {
        // user profile root
        username = rp.accountname;
    }

    const profile = username ? readProfile(chain_data, username) : null;

    const metas = [];
    if (content) {
        addPostMeta(metas, content, profile);
    } else if (username) {
        addAccountMeta(metas, username, profile);
    } else {
        addSiteMeta(metas);
    }

    return metas;
}
