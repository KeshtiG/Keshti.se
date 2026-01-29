import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
};


const InstagramFeed = () => {
  const token = process.env.NEXT_PUBLIC_IG_TOKEN;
  if (!token) { 
    console.error("Error: Instagram token missing.");
    return null;
  }

  const [posts, setPosts] = useState<InstagramPost[]>([]);


  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${token}`
    )
      .then(res => res.json())
      .then(data => setPosts(data.data || []));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map(post => (
        <a key={post.id} href={post.permalink} target="_blank">
          <img
            src={post.media_url}
            alt={post.caption || ""}
            className="rounded-lg object-cover w-full h-full"
          />
        </a>
      ))}
    </div>
  );
}

export default InstagramFeed;
