package app.btyd.entity;

import java.sql.Timestamp;

public record Topic(
        Integer id,
        Integer nodeId,
        Integer postUserId,
        String title,
        String content,
        Timestamp postTime,
        Timestamp updatedTime
) {
}
