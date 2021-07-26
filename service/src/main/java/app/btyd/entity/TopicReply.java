package app.btyd.entity;

import java.sql.Timestamp;

public record TopicReply(
        Integer id,
        Integer topicId,
        Integer replyUserId,
        String replyContent,
        Timestamp replyTime
) {
}
