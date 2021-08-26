package app.btyd.entity;

import lombok.Builder;

import java.sql.Timestamp;

public record NotificationEntity(
        Integer id,
        String type,
        Integer userId,
        Integer topicId,
        Integer triggerUserId,
        Boolean unread,
        Timestamp triggerTime
) {
    public static final String TYPE_REPLY = "REPLY";
    public static final String TYPE_FAVORITE = "FAVORITE";

    @Builder
    public NotificationEntity {
    }
}
