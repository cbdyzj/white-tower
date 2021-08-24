package app.btyd.model;

import java.util.Date;
import java.util.List;

public record Topic(
        Integer id,
        String title,
        String content,
        String nodeCode,
        String nodeName,
        String postUserAvatarUrl,
        String postUser,
        Date postTime,
        Date updatedTime,
        Integer replyCount,
        Integer replyPage,
        List<TopicReply> replyList
) {
}