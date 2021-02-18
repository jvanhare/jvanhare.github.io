const fs = require("fs")
const yaml = require("js-yaml")
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const yml = yaml.safeLoad(fs.readFileSync("./static/cv/src/cv.yml", "utf-8"))
    yml.seminars.forEach(elt => {
        console.log("Create page /" + elt.link)
        createPage({
            path: elt.link,
            component: require.resolve("./src/templates/seminar.js"),
            context: {
                title: elt.title,
                html: elt.html,
                pdf: elt.pdf,
                img: elt.img,
                institution: elt.institution,
                institution_url: elt.institution_url,
                location: elt.location,
                date: elt.date,
                abstract: elt.abstract,
            },
        })
    })
}
