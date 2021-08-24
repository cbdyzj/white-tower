package app.btyd.entity;

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
}
