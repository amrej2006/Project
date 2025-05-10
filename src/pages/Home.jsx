import React from "react";
import appwriteService from "../appwrite/config"
import { useEffect, useState } from "react";
import { Container, PostCard,  } from "../components";

function Home (){
    const[post, setPosts]= useState([])
    useEffect(()=>{
        appwriteService.getPost().then((post)=>{
            if(post){
                setPosts(post.doucument)
            }
        })
    },[])
    if(post.length === 0){
        return(
          <div className="w- full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="text-2xl font-bold hover:text-gray-500">
                        login to read post
                    </div>
                </div>
            </Container>
          </div>
        )
    }
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap ">
                    {post.map((post)=>{
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    })}
                </div>
            </Container>
        </div>
    )
   
}

export default Home