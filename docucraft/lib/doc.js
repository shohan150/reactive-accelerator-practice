import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { remark } from "remark";
import html from "remark-html";

/* defining the directory path where the
documents are stored. */
const postsDirectory = path.join(process.cwd(), "docs");
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
