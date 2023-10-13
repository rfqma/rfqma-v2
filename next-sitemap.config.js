/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.WEBSITE_URL || "https://www.rifqimaulana.my.id",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      // { userAgent: "*", disallow: "/admin" },
      { userAgent: "*", allow: "/" }
    ],
    additionalSitemaps: [`${process.env.WEBSITE_URL}/server-sitemap.xml`]
  }
  // exclude: ["/admin/*"]
}
