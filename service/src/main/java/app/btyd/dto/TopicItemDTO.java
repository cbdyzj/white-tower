package app.btyd.dto;

import lombok.Builder;

import java.util.Date;

public record TopicItemDTO(
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
    @Builder
    public TopicItemDTO {
    }
}
