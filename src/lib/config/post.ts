import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  comment: {
    use: ['Giscus']
    // giscus: {
    //   repo: 'SarcevicAntonio/SarcevicAntonio',
    //   repoID: 'MDEwOlJlcG9zaXRvcnkxODkzMDAxNjM=',
    //   category: 'Comments',
    //   categoryID: 'DIC_kwDOC0h9w84CSwfL',
    //   reactionsEnabled: true,
    //   inputPosition: 'top',
    //   lang: 'en',
    //   theme: 'preferred_color_scheme',
    //   loading: 'lazy'
    // }
  }
}
