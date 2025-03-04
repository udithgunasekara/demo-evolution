package com.sampleProject.Sample.Project.Controller;

import com.sampleProject.Sample.Project.DTO.PostDTO;
import com.sampleProject.Sample.Project.Entity.Post;
import com.sampleProject.Sample.Project.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path ="/post")
public class PostController {

    @Autowired
    private PostService postService;

    //creating post
    @PostMapping
    public ResponseEntity<PostDTO> createPost(@RequestBody PostDTO postDTO) {
        PostDTO savePost = postService.savePost(postDTO);
        return new ResponseEntity<>(savePost, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PostDTO>> getAllPosts(){
        List<PostDTO> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }




}
