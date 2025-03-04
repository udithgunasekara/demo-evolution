package com.sampleProject.Sample.Project.Mapper;

import com.sampleProject.Sample.Project.DTO.CommentDTO;
import com.sampleProject.Sample.Project.Entity.Comment;

public class CommentMapper {

    public static CommentDTO toCommentDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setId(comment.getId());
        commentDTO.setComment(comment.getComment());
        commentDTO.setPostId(comment.getId());

        return commentDTO;
    }

    public static Comment toComment(CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setId(commentDTO.getId());
        comment.setComment(commentDTO.getComment());
        comment.setPostId(commentDTO.getPostId());
        return comment;
    }

}
