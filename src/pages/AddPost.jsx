import React from "react";
import { Container, PostForm as PostFormcomponent } from "../components";

 function AddPost(){
    return(
        <div className="py-8 text-black">
            <Container>
                <PostFormcomponent/>
            </Container>
        </div>
    )
}

export default AddPost