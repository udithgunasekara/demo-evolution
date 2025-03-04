package com.sampleProject.Sample.Project.Repository;

import com.sampleProject.Sample.Project.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
