import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '547aee4817b64058a3acb9a55af1a8d9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Xingyu Zhou',
  domain: 'xingyuzhou.me',
  author: 'Xingyu Zhou',

  // open graph metadata (optional)
  description: 'Xingyu Zhou \'s Personal Website',

  // social usernames (optional)
  twitter: 'XingyuPhD',
  github: 'xingyuzhouphd',
  linkedin: 'xingyuzhou94',
  googlescholar: 'citations?user=uPfaTxcAAAAJ',
  researchgate: 'profile/Xingyu-Zhou-11'
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About',
       pageId: 'c15e35aa2a4c4ab6a0450b61264952c0'
     },
     {
       title: 'Contact',
       pageId: '98d6d850be444ac783c8d9b8ae5d49a8'
     }
   ]
})
