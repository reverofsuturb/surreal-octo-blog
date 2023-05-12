import PreviewSuspense from "@/components/PreviewSuspense";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  catergories[]->
  | order(_createdAt desc)
}
`;

export default async function Page() {
  const { isEnabled } = draftMode();
  const posts = await client.fetch(query);
  console.log(posts);

  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Draft Mode is currently Enabled
            </p>
          </div>
        }
      ><PreviewBlogList query={query}/></PreviewSuspense>
    );
  }

  if (!isEnabled) {
    return (
      <>
      <BlogList posts={posts} />;
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Draft Mode is currently 'Disabled'
        </p>
      </div>
      </>
    );
  }
}
