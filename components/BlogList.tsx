import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div>
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlForImage(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
