package com.sampleProject.Sample.Project.Mapper;

import com.sampleProject.Sample.Project.DTO.PostDTO;
import com.sampleProject.Sample.Project.Entity.Post;

public class PostMapper {

    //DTO mapping
    public static PostDTO toPostDTO(Post post) {
        PostDTO postDTO = new PostDTO();
        postDTO.setId(post.getId());
        postDTO.setTitle(post.getTitle());
        postDTO.setDescription(post.getDescription());
        return postDTO;
    }

    //Entity mapping
    public static Post toPost(PostDTO postDTO) {
        Post post = new Post();
        post.setId(postDTO.getId());
        post.setTitle(postDTO.getTitle());
        post.setDescription(postDTO.getDescription());
        return post;
    }



}
