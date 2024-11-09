import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { remark } from "remark";
import html from "remark-html";

/* defining the directory path where the
documents are stored. */
const postsDirectory = path.join(process.cwd(), "docs");

// This function retrieves a list of documents from a specified directory. It uses the `readdirSync` function from the `fs` module to read the file names in the directory. Then, it maps over each file name, extracting the document ID by removing the `.md` extension. It reads the content of each file using `fs.readFileSync` and uses the `matter` function to parse the content as a matter document. Finally, it returns an array of objects containing the document ID and the parsed data, sorted by the `order` property.
export function getDocuments() {
    // console.log(postsDirectory);
    // log: D:\lws\reactive-accelerator\reactive-accelerator-practice\docucraft\docs
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocumnets = fileNames.map((fileName) => {
        const id = fileName.replace(".md", "");

        const fullPath = path.join(postsDirectory, fileName);

        const fileContent = fs.readFileSync(fullPath, "utf8");

        const matterResult = matter(fileContent);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allDocumnets.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    });
}

//This function retrieves the content of a Markdown (.md) file, converts it to HTML, and returns the HTML content along with the file's metadata. It uses the matter library to parse the file's metadata (e.g., title, date, author).It uses the remark library to convert the Markdown content to HTML. It returns an object containing the file's id, the converted HTML content, and the parsed metadata.
export async function getDocumentContent(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    //converts the content in .md files into html using reamrk package.
    const processedContent = await remark().use(html).process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}
