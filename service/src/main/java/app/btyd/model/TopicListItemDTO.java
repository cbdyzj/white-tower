package app.btyd.model;

import java.util.Date;

public record TopicListItemDTO(
        Integer id,
        String title,
        String nodeCode,
        String nodeName,
        String postUserAvatarUrl,
        String postUser,
        String lastReplyUser,
        Date updatedTime,
        Integer replyCount
) {
}
