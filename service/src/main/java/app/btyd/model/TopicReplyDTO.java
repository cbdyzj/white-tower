package app.btyd.model;

public record TopicReplyDTO(
        Integer id,
        String replyUser,
        String replyUserAvatarUrl,
        String replyTime,
        String replyContent
) {
}
