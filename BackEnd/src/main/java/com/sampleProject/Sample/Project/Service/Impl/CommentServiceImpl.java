package com.sampleProject.Sample.Project.Service.Impl;

import com.sampleProject.Sample.Project.DTO.CommentDTO;
import com.sampleProject.Sample.Project.Entity.Comment;
import com.sampleProject.Sample.Project.Mapper.CommentMapper;
import com.sampleProject.Sample.Project.Repository.CommentRepository;
import com.sampleProject.Sample.Project.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Override
    public CommentDTO saveComment(CommentDTO commentDTO) {
        Comment comment = CommentMapper.toComment(commentDTO);
        Comment savedComment = commentRepository.save(comment);
        return CommentMapper.toCommentDTO(savedComment);
    }

    @Override
    public List<CommentDTO> getCommentsById(int id) {
        List<Comment> comments = commentRepository.findByPostId(id);
        return comments.stream()
                .map(CommentMapper::toCommentDTO)
                .collect(Collectors.toList());

    }
}
