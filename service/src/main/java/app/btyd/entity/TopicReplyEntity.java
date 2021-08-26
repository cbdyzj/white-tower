package app.btyd.entity;

import lombok.Builder;

import java.sql.Timestamp;

public record TopicReplyEntity(
        Integer id,
        Integer topicId,
        Integer replyUserId,
        String replyContent,
        Timestamp replyTime
) {

    @Builder
    public TopicReplyEntity {
    }
}
