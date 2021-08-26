package app.btyd.dto;

import lombok.Builder;

public record TopicReplyDTO(
        Integer id,
        String replyUser,
        String replyUserAvatarUrl,
        String replyTime,
        String replyContent
) {

    @Builder
    public TopicReplyDTO {
    }
}
