package app.btyd.model;

public record TopicReply(
        Integer id,
        String replyUser,
        String replyUserAvatarUrl,
        String replyTime,
        String replyContent
) {
}
