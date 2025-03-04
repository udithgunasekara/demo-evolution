package com.sampleProject.Sample.Project.Service;

import com.sampleProject.Sample.Project.DTO.CommentDTO;

import java.util.List;

public interface CommentService {
    CommentDTO saveComment(CommentDTO commentDTO);
    List<CommentDTO> getCommentsById(int id);
}
