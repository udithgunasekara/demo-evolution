package com.sampleProject.Sample.Project.Service;

import com.sampleProject.Sample.Project.DTO.PostDTO;

import java.util.List;

public interface PostService {
    PostDTO savePost(PostDTO postDTO);
    List<PostDTO> getAllPosts();
}
