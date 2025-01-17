import axios from 'axios';
import { useEffect, useState } from 'react';
import rectangle187 from '../assets/rectangle187.png';
import rectangle188 from '../assets/rectangle188.png';
import rectangle189 from '../assets/rectangle189.png';
import rectangle190 from '../assets/rectangle190.png';
import rectangle191 from '../assets/rectangle191.png';

function BlogSpot() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anisoccer749")
            .then((res) => {
                const posts = res.data.items;

                // Extract the first image link from each post's description or content
                const updatedPosts = posts.map((post) => {
                    const description = post.description || "";
                    const match = description.match(/<img[^>]+src=\"([^\">]+)\"/);
                    const firstImageLink = match ? match[1] : null;

                    return {
                        ...post,
                        firstImage: firstImageLink, // Add the extracted image link to the post object
                    };
                });

                // Update state with the modified posts
                setPosts(updatedPosts);
            })
            .catch((error) => {
                console.log("Error fetching blog posts:", error);
            });
    }, []);
    return (

<div className='mt-[6.91rem] w-auto mx-auto mb-[10rem]'>
<p className="mx-auto text-center font-pSans w-[14.94719rem] h-[1.12506rem] lg:h-[4rem] font-semibold text-[clamp(1.35606rem,1.5vw,2.54263rem)] leading-[1.13794rem] tracking-[0.00963rem]">Blog</p>
<div className='mx-auto flex items-center justify-between mt-[2.57rem] space-x-[1.75rem] overflow-x-scroll no-scrollbar md:overflow-visible'>
    {posts.map((post, index) => (
        <div key={index} className="w-[12.84888rem] h-[12.14rem] 
                                    lg:w-[17.62963rem] lg:h-[22.11113rem]
                                    mac:w-[22.03706rem] mac:h-[27.63894rem]
                                    lap:w-[23.51769rem] lap:h-[29.49588rem]
                                    xl:w-[24.79169rem]  xl:h-[31.09375rem]
                                    2xl:w-[26.44444rem] 2xl:h-[33.16669rem]
                                    3xl:w-[33.05556rem] 3xl:h-[41.45838rem]
        ">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-[100%]">
                <img
                src={post.firstImage || rectangle188}
                alt="blogImg"
                className=" overflow-clip absolute top-0 left-0 w-full h-full opacity-80 bg-black transition-opacity duration-700 hover:opacity-50 object-cover"
                />
                
            </div>
            </a>
        <p
          className="text-[0.53988rem] md:w-full font-normal font-title overflow-visible
            mt-[0.49rem] w-[12.84888rem] text-[#535353] leading-[0.70313rem] tracking-[0.00538rem]
            lg:text-[0.92594rem] lg:leading-[1.20588rem] lg:tracking-[0.00925rem]
            xl:text-[1.04169rem] xl:leading-[1.35663rem] xl:tracking-[0.01044rem]"
        >
          {post.title}
        </p>
      </div>
    ))}
</div>
</div>
    );
}

export default BlogSpot;
