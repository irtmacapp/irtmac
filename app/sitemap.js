 export default async function sitemap() {
     const response = await fetch(
         `${process.env.NEXT_PUBLIC_MAIN_URL}/allblogs`
     );
     const data = await response.json();

     const sitemapdata = data?.data?.map((item) => ({
         url: `${process.env.NEXT_PUBLIC_SITE_NAME}/blog/${item?.id}/${item?.slug}`,
         lastModified: new Date(),
         changeFrequency: 'weekly',
         priority: 0.5,
     }))

     return [{
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/haqqimizda`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/meqsed`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/rehber`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/sertifikatlar`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/tovsiye`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/faq`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/portfolio`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/kiv`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/blog`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         {
             url: `${process.env.NEXT_PUBLIC_SITE_NAME}/elaqe`,
             lastModified: new Date(),
             changeFrequency: 'monthly',
             priority: 1,
         },
         ...sitemapdata
     ]
 }