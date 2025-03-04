package com.sampleProject.Sample.Project.Controller;


import com.sampleProject.Sample.Project.DTO.CommentDTO;
import com.sampleProject.Sample.Project.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;
    //add comment
    @PostMapping
    public ResponseEntity<CommentDTO> addComment(@RequestBody CommentDTO commentDTO){

        CommentDTO saveComment = commentService.saveComment(commentDTO);
        return new ResponseEntity<>(saveComment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<CommentDTO>> getCommentsById(@PathVariable int id) {
        List<CommentDTO> comments = commentService.getCommentsById(id);
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }




}
