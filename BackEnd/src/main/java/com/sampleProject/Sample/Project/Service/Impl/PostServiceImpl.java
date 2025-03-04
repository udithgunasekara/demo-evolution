package com.sampleProject.Sample.Project.Service.Impl;

import com.sampleProject.Sample.Project.DTO.PostDTO;
import com.sampleProject.Sample.Project.Entity.Post;
import com.sampleProject.Sample.Project.Mapper.PostMapper;
import com.sampleProject.Sample.Project.Repository.PostRepository;
import com.sampleProject.Sample.Project.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;
    @Override
    public PostDTO savePost(PostDTO postDTO) {
        Post post = PostMapper.toPost(postDTO);
        Post savedPost = postRepository.save(post);
        return PostMapper.toPostDTO(savedPost);
    }
}
