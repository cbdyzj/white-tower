package app.btyd.dto;

import lombok.Builder;

import java.util.Date;
import java.util.List;

public record TopicDTO(
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
        List<TopicReplyDTO> replyList
) {

    @Builder
    public TopicDTO {
    }
}
