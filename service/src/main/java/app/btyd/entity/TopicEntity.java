package app.btyd.entity;

import lombok.Builder;

import java.sql.Timestamp;

public record TopicEntity(
        Integer id,
        Integer nodeId,
        Integer postUserId,
        String title,
        String content,
        Timestamp postTime,
        Timestamp updatedTime
) {

    @Builder
    public TopicEntity {
    }
}
